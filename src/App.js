import { useEffect, useState } from 'react';
import './App.css';
import { HeaderFooter } from './HeaderFooter';
import { GameMode } from './GameMode';
import { PlayerStats } from './PlayerStats';
import { Cards } from './Cards';

let data = {
  "gameModes" : {
      "Tutorial": {
        "totalLevel": 2,
        "levelData":[
          [{"text": "specialDataTutorial",
          "msg": "Click all cards, but only once each.", "img": "./Images/sushiChar.png"}]
        ]
      },
      "KanjiN5": {
        "totalLevel": 3,
        "levelData":[
          [
            {"text": "Yen", "img": "./Images/ansen.png", "index": "0"},
            {"text": "Meet", "img": "./Images/au.png", "index": "1"},
            {"text": "Old", "img": "./Images/chi.png", "index": "2"},
            {"text": "Small", "img": "./Images/chisai.png", "index": "3"},
            {"text": "Ground", "img": "./Images/do.png", "index": "4"}
          ],
          [
            {"text": "Comfortable", "img": "./Images/en.png", "index": "0"},
            {"text": "Enter", "img": "./Images/hairu.png", "index": "1"},
            {"text": "Half", "img": "./Images/han.png", "index": "2"},
            {"text": "Human", "img": "./Images/hito.png", "index": "3"},
            {"text": "Hundred", "img": "./Images/hyaku.png", "index": "4"},
            {"text": "Meet", "img": "./Images/au.png", "index": "5"},
            {"text": "Small", "img": "./Images/chisai.png", "index": "6"}
          ],
          [
            {"text": "Now", "img": "./Images/ima.png", "index": "0"},
            {"text": "Yen", "img": "./Images/en.png", "index": "1"},
            {"text": "Time", "img": "./Images/ji.png", "index": "2"},
            {"text": "Form", "img": "./Images/kata.png", "index": "3"},
            {"text": "Child", "img": "./Images/ko.png", "index": "4"},
            {"text": "10,000", "img": "./Images/man.png", "index": "5"},
            {"text": "Small", "img": "./Images/chi.png", "index": "6"},
            {"text": "Right", "img": "./Images/migi.png", "index": "7"},
            {"text": "Learn", "img": "./Images/manabu.png", "index": "8"},
            {"text": "Human", "img": "./Images/hito.png", "index": "9"}
          ],
          [
            {"text": "specialWinningMsg", "msg": "おめでとう! お疲れ様です", "img": "./Images/sushiChar.png"}
          ]
        ]
      },
      "KanjiN3": {
        "totalLevel": 3,
        "levelData":[
          [
            {"text": "進行中", "img": "./Images/sushiChar.png", "index": "0"}
          ],
          [
            {"text": "進行中", "img": "./Images/sushiChar.png", "index": "0"}
          ],
          [
            {"text": "進行中", "img": "./Images/sushiChar.png", "index": "0"}
          ],
          [
            {"text": "specialWinningMsg", "msg": "おめでとう! お疲れ様です", "img": "./Images/sushiChar.png"}
          ]
        ]
      }
  }
};

// HOW TO FETCH DATA IS STILL IN DISCOVERY
// (async function () {
//   await fetch('./data.json').then(res => res.json()).then(result => data = result);
// })();

function App() {

  // Currently selected GameMode
  const [curMode, setCurMode] = useState('Tutorial');

  // Current and Total levels (depends on gameMode)
  const [totalLevel, setTotalLevel] = useState(1);
  const [curLevel, setCurLevel] = useState(0);

  // CardData - A set of cards according to current mode and level, CardUpdate - Toggles state to trigger useEffect and update cards.
  const [cardData, setCardData] = useState([]);
  const [cardUpdate, setCardUpdate] = useState(true);


  // Scores (total - necessary score to level up, current - current score in current level, accumulated - accumulatd score across levels)
  const [totalScore, setTotalScore] = useState(1);
  const [curScore, setCurScore] = useState(0);
  const [accScore, setAccScore] = useState(0);
  
  const changeMode = function (mode) {
    setCurMode(mode);
  }

  const cardChosen = function (result) {
    setAccScore((state) => {
      return (result? state + result : 0);
    });
    setCurScore((state) => {
      return (result? state + result : 0);
    });
    setCurLevel((state)=>{
      return (result? state : 0);
    })
  }


  useEffect(() => {
    console.log(curScore, totalScore);
    setCurLevel((state) => {
      return (curScore === totalScore? state + 1 : state)
    });
    setCurScore((state) => {
      return (curScore === totalScore? 0 : state);
    })
  }, [curScore]);

  useEffect(() => {
    setCurLevel(0);
    setCardUpdate((state)=>{
      return(!state);
    })
    setTotalLevel(data.gameModes[curMode].totalLevel);
  }, [curMode])

  useEffect(() => {
    console.log(curLevel);
    setCardData(data.gameModes[curMode].levelData[curLevel]);
  }, [curLevel, cardUpdate])

  useEffect(() => { 
    setTotalScore(() => {
      console.log("cardDataLength", cardData.length);
      return (cardData.length ? cardData.length : 0)
      });
  }, [cardData])

  return (
    <div className="App">
      <HeaderFooter />
      <div className="statBar">
        <GameMode 
          gameModes = {data.gameModes}
          modeChanged = {changeMode}/>
        <PlayerStats 
          totalLevel = {totalLevel}
          level = {curLevel}
          choices = {accScore}  
        />
      </div>
      <Cards cardData = {cardData}
              correctChoice = {cardChosen}
            />
    </div>
  );
}

export default App;


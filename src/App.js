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
          "msg": "how to play this game"}]
        ]
      },
      "KanjiN5": {
        "totalLevel": 3,
        "levelData":[
          [
            {"text": "winter1", "img": "https://i.pinimg.com/originals/14/b0/2e/14b02ee5d505b1e7d36c4db03ec42c5c.jpg", "index": "0"},
            {"text": "winter2", "img": "https://i.pinimg.com/originals/14/b0/2e/14b02ee5d505b1e7d36c4db03ec42c5c.jpg", "index": "1"},
            {"text": "winter3", "img": "https://i.pinimg.com/originals/14/b0/2e/14b02ee5d505b1e7d36c4db03ec42c5c.jpg", "index": "2"},
            {"text": "winter4", "img": "https://i.pinimg.com/originals/14/b0/2e/14b02ee5d505b1e7d36c4db03ec42c5c.jpg", "index": "3"},
            {"text": "winter5", "img": "https://i.pinimg.com/originals/14/b0/2e/14b02ee5d505b1e7d36c4db03ec42c5c.jpg", "index": "4"},
            {"text": "winter6", "img": "https://i.pinimg.com/originals/14/b0/2e/14b02ee5d505b1e7d36c4db03ec42c5c.jpg", "index": "5"},
          ],
          [
            {"text": "winter1", "img": "https://i.pinimg.com/originals/14/b0/2e/14b02ee5d505b1e7d36c4db03ec42c5c.jpg", "index": "0"},
            {"text": "winter2", "img": "https://i.pinimg.com/originals/14/b0/2e/14b02ee5d505b1e7d36c4db03ec42c5c.jpg", "index": "1"},
            {"text": "winter3", "img": "https://i.pinimg.com/originals/14/b0/2e/14b02ee5d505b1e7d36c4db03ec42c5c.jpg", "index": "2"},
            {"text": "winter4", "img": "https://i.pinimg.com/originals/14/b0/2e/14b02ee5d505b1e7d36c4db03ec42c5c.jpg", "index": "3"},
            {"text": "winter5", "img": "https://i.pinimg.com/originals/14/b0/2e/14b02ee5d505b1e7d36c4db03ec42c5c.jpg", "index": "4"},
            {"text": "winter6", "img": "https://i.pinimg.com/originals/14/b0/2e/14b02ee5d505b1e7d36c4db03ec42c5c.jpg", "index": "5"},
          ],
          [
            {"text": "winter1", "img": "https://i.pinimg.com/originals/14/b0/2e/14b02ee5d505b1e7d36c4db03ec42c5c.jpg", "index": "0"},
            {"text": "winter2", "img": "https://i.pinimg.com/originals/14/b0/2e/14b02ee5d505b1e7d36c4db03ec42c5c.jpg", "index": "1"},
            {"text": "winter3", "img": "https://i.pinimg.com/originals/14/b0/2e/14b02ee5d505b1e7d36c4db03ec42c5c.jpg", "index": "2"},
            {"text": "winter4", "img": "https://i.pinimg.com/originals/14/b0/2e/14b02ee5d505b1e7d36c4db03ec42c5c.jpg", "index": "3"},
            {"text": "winter5", "img": "https://i.pinimg.com/originals/14/b0/2e/14b02ee5d505b1e7d36c4db03ec42c5c.jpg", "index": "4"},
            {"text": "winter6", "img": "https://i.pinimg.com/originals/14/b0/2e/14b02ee5d505b1e7d36c4db03ec42c5c.jpg", "index": "5"},
          ],
          [
            {"text": "specialWinningMsg", "msg": "Congratuatations!"}
          ]
        ]
      },
      "KanjiN3": {
        "totalLevel": 3,
        "levelData":[
          [
            {"text": "winter", "img": "https://i.pinimg.com/originals/14/b0/2e/14b02ee5d505b1e7d36c4db03ec42c5c.jpg", "index": "0"},
          ],
          [
            {"text": "winter", "img": "https://i.pinimg.com/originals/14/b0/2e/14b02ee5d505b1e7d36c4db03ec42c5c.jpg", "index": "0"},
          ],
          [
            {"text": "winter", "img": "https://i.pinimg.com/originals/14/b0/2e/14b02ee5d505b1e7d36c4db03ec42c5c.jpg", "index": "0"},
          ],
          [
            {"text": "specialWinningMsg", "msg": "Congratuatations!"}
          ]
        ]
      },
  }
}

function App() {

  const [curMode, setCurMode] = useState('Tutorial');
  const [totalLevel, setTotalLevel] = useState(1);
  const [curLevel, setCurLevel] = useState(0);
  const [cardData, setCardData] = useState([]);
  const [totalScore, setTotalScore] = useState(1);
  const [curScore, setCurScore] = useState(0);
  const [accScore, setAccScore] = useState(0);
  const [cardUpdate, setCardUpdate] = useState(true);
  
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

// await fetch('./data.json').then(res => res.json()).then(data => gameModes = data.gameModes);
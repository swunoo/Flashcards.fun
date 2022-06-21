import { useEffect, useState } from 'react';
import './App.css';
import { HeaderFooter } from './HeaderFooter';
import { GameMode } from './GameMode';
import { PlayerStats } from './PlayerStats';
import { Cards } from './Cards';

let data = {
  "gameModes" : {
      "Tutorial": {
        "totalLevel": 1,
        "levelData":[
          [{"text": "specialDataTutorial",
          "tutorial": "how to play this game"}]
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
        ]
      },
  }
}

function App() {

  const [curMode, setCurMode] = useState('Tutorial');
  const [totalLevel, setTotalLevel] = useState(1);
  const [curLevel, setCurLevel] = useState(0);
  const [cardData, setCardData] = useState(null);
  const [totalScore, setTotalScore] = useState(1);
  const [curScore, setCurScore] = useState(0);
  const [gameStatus, setGameStatus] = useState(true);
  
  const changeMode = function (mode) {
    setCurMode(mode);
  }

  const cardChosen = function (result) {
    setCurScore((state) => {
      return (result? state + result : 0)
    });
  }

  useEffect(() => {
    setCurLevel((state) => {
      return (curScore === totalScore+1? state + 1 : state)
    })
  }, [curScore]);

  useEffect(() => {
    setGameStatus(()=>{
      return (curLevel === totalLevel
            ? false : true);
    })
  }, [curLevel]);

  useEffect(()=>{
    console.log('it changes');
  }, [gameStatus]);

  useEffect(() => {
    console.log(totalScore);
    setCardData(data.gameModes[curMode].levelData[curLevel]);
    setTotalLevel(data.gameModes[curMode].totalLevel);
  }, [curLevel, curMode])

  useEffect(() => { 
    setTotalScore((state) => {
      return (cardData ? (state + cardData.length - 1) : 0)
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
          choices = {curScore}  
        />
      </div>
      {gameStatus && 
      (<Cards cardData = {cardData}
              correctChoice = {cardChosen}
              totalScore = {totalScore}/>)}
      {!gameStatus && (<div>congratz</div>)}
    </div>
  );
}

export default App;

// await fetch('./data.json').then(res => res.json()).then(data => gameModes = data.gameModes);
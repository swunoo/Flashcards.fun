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
          {"text": "specialDataTutorial",
          "tutorial": "how to play this game"}
        ]
      },
      "KanjiN5": {
        "totalLevel": 3,
        "levelData":[
          [
            {"text": "winter", "img": "https://i.pinimg.com/originals/14/b0/2e/14b02ee5d505b1e7d36c4db03ec42c5c.jpg"},
            {"text": "winter", "img": "https://i.pinimg.com/originals/14/b0/2e/14b02ee5d505b1e7d36c4db03ec42c5c.jpg"},
            {"text": "winter", "img": "https://i.pinimg.com/originals/14/b0/2e/14b02ee5d505b1e7d36c4db03ec42c5c.jpg"},
          ],
          [
            {"text": "winter", "img": "https://i.pinimg.com/originals/14/b0/2e/14b02ee5d505b1e7d36c4db03ec42c5c.jpg"},
            {"text": "winter", "img": "https://i.pinimg.com/originals/14/b0/2e/14b02ee5d505b1e7d36c4db03ec42c5c.jpg"},
            {"text": "winter", "img": "https://i.pinimg.com/originals/14/b0/2e/14b02ee5d505b1e7d36c4db03ec42c5c.jpg"},
            {"text": "winter", "img": "https://i.pinimg.com/originals/14/b0/2e/14b02ee5d505b1e7d36c4db03ec42c5c.jpg"},
            {"text": "winter", "img": "https://i.pinimg.com/originals/14/b0/2e/14b02ee5d505b1e7d36c4db03ec42c5c.jpg"},
            {"text": "winter", "img": "https://i.pinimg.com/originals/14/b0/2e/14b02ee5d505b1e7d36c4db03ec42c5c.jpg"},
          ],
          [
            {"text": "winter", "img": "https://i.pinimg.com/originals/14/b0/2e/14b02ee5d505b1e7d36c4db03ec42c5c.jpg"},
            {"text": "winter", "img": "https://i.pinimg.com/originals/14/b0/2e/14b02ee5d505b1e7d36c4db03ec42c5c.jpg"},
            {"text": "winter", "img": "https://i.pinimg.com/originals/14/b0/2e/14b02ee5d505b1e7d36c4db03ec42c5c.jpg"},
            {"text": "winter", "img": "https://i.pinimg.com/originals/14/b0/2e/14b02ee5d505b1e7d36c4db03ec42c5c.jpg"},
            {"text": "winter", "img": "https://i.pinimg.com/originals/14/b0/2e/14b02ee5d505b1e7d36c4db03ec42c5c.jpg"},
            {"text": "winter", "img": "https://i.pinimg.com/originals/14/b0/2e/14b02ee5d505b1e7d36c4db03ec42c5c.jpg"},
            {"text": "winter", "img": "https://i.pinimg.com/originals/14/b0/2e/14b02ee5d505b1e7d36c4db03ec42c5c.jpg"},
            {"text": "winter", "img": "https://i.pinimg.com/originals/14/b0/2e/14b02ee5d505b1e7d36c4db03ec42c5c.jpg"},
            {"text": "winter", "img": "https://i.pinimg.com/originals/14/b0/2e/14b02ee5d505b1e7d36c4db03ec42c5c.jpg"},
          ],
        ]
      },
      "KanjiN3": {
        "totalLevel": 3,
        "levelData":[
          [
            {"text": "winter", "img": "https://i.pinimg.com/originals/14/b0/2e/14b02ee5d505b1e7d36c4db03ec42c5c.jpg"},
          ],
          [
            {"text": "winter", "img": "https://i.pinimg.com/originals/14/b0/2e/14b02ee5d505b1e7d36c4db03ec42c5c.jpg"},
          ],
          [
            {"text": "winter", "img": "https://i.pinimg.com/originals/14/b0/2e/14b02ee5d505b1e7d36c4db03ec42c5c.jpg"},
          ],
        ]
      },
  }
}

function App() {

  const [curMode, setCurMode] = useState('Tutorial');
  const [curLevel, setCurLevel] = useState(null);
  const [cardData, setCardData] = useState(null);
  

  const changeLevel = function (level) {
    setCurLevel(level);
  }

  const changeMode = function (mode) {
    setCurMode(mode);
  }

  useEffect(() => {
    setCardData(data.gameModes[curMode].levelData[curLevel]);
  }, [curLevel, curMode])

  return (
    <div className="App">
      <HeaderFooter />
      <div className="statBar">
        <GameMode 
          gameModes = {data.gameModes}
          modeChanged = {changeMode}/>
        <PlayerStats 
          totalLevel = {data.gameModes[curMode].totalLevel}
          levelChanged = {changeLevel}  
        />
      </div>
      <Cards cardData = {cardData} />

    </div>
  );
}

export default App;

// await fetch('./data.json').then(res => res.json()).then(data => gameModes = data.gameModes);
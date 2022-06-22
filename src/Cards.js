import React from "react";

let cardArr = [];

export function Cards (props) {

    const shuffle = (array) => {
        let len = array.length;
        let temp, index;
        while(len) {
            index = Math.floor(Math.random() * len --);
            temp = array[len];
            array[len] = array[index];
            array[index] = temp;
        }
        return array;
    }

    const cardClicked = function (e) {
        console.log("you have clicked", e.currentTarget.id);
        if(cardArr.includes(e.currentTarget.id)){
            props.correctChoice(false);
            cardArr = [];
        } else {
            cardArr.push(e.currentTarget.id);
            if(cardArr.length === props.cardData.length) cardArr = [];
            props.correctChoice(true);
        }
    }
    
    const renderOnBody = function (cardData) {
        if(!cardData[0]) return;
        else if(cardData[0].text === 'specialDataTutorial'){
            return (
                <div className="tutorialTxt">
                    <h3>How to Play</h3>
                    <p>{cardData[0].msg}</p>
                </div>
            )
        } else if(cardData[0].text === 'specialWinningMsg'){
            return (
                <div className="winningTxt">
                    <h3>{cardData[0].msg}</h3>
                    <img src={require(`${cardData[0].img}`)}/>
                </div>
            )
        } else {
            let shuffledArr = shuffle(cardData);
            return (
                shuffledArr.map(data => {
                    return (
                        <div className="eachCard" key={data.text} id={data.index} onClick={cardClicked}>
                            <img src={require(`${data.img}`)} alt={data.text} />
                            <p>{data.text}</p>
                        </div>
                    )
                })
            )
        }
    }
    return (
        <div className="cardsBody">
            {renderOnBody(props.cardData)}
        </div>
    )
}
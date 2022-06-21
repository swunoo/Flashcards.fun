import React from "react";

export function Cards (props) {
    
    const renderOnBody = function (cardData) {
        if(cardData.text === 'specialDataTutorial'){
            return (
                <div className="tutorialTxt">
                    <h3>How to Play</h3>
                    <p>{cardData.tutorial}</p>
                </div>
            )
        } else {
            return (
                cardData.map(data => {
                    return (
                        <div className="eachCard" key={data.text}>
                            <img src={data.img} alt={data.text} />
                            <p>{data.text}</p>
                        </div>
                    )
                })
            )
        }
    }
    return (
        <div className="cardsBody">
            {   props.cardData &&
                renderOnBody(props.cardData)
            }
        </div>
    )
}
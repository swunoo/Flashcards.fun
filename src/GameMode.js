import React from "react";

export function GameMode (props) {

    let modeOptions = [];
    for (let mode in props.gameModes) {
        modeOptions.push (
            <option value={mode} key={mode}>
                {mode}
            </option>
        )
    }

    const modeIsChanged = function (e) {
        props.modeChanged(e.target.value);
    }

    return (
        <>
            <select id="gameMode" onChange={modeIsChanged}>
                {modeOptions}
            </select>
        </>
    )
} 
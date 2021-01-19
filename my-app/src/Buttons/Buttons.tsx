import React from "react";

type ButtonsType = {
    incButton: () => void
    resetButton: () => void
    score: number
}

export function Buttons (props: ButtonsType) {
    return (
        <div>
            <button
                disabled={props.score === 5}
                onClick={props.incButton}>inc</button>
            <button
                disabled={props.score === 0}
                onClick={props.resetButton}>reset</button>
        </div>
    )
}
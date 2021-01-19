import React, {useState} from "react";
import {Screen} from "../Screen/Screen";
import {Buttons} from "../Buttons/Buttons";
import {MyButton} from "../Button/Button";

type CounterScreenPropsType = {
    score: number
    incButton: () => void
    resetButton: () => void
    maxValue: number
}

export function CounterScreen(props: CounterScreenPropsType) {

    return (
        <div className="globalDiv">
            <div className="screen">
                <Screen score={props.score}/>
            </div>
            <div className="buttons">
                <MyButton
                    disabled={false}
                    score={props.score}
                    maxValue={props.maxValue}
                    incButton={props.incButton}
                    title={"inc"}/>
                <MyButton
                    disabled={false}
                    resetButton={props.resetButton}
                    title={"reset"}/>
            </div>
        </div>
    )
}
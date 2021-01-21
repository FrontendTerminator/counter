import React from "react";
import {Screen} from "../Screen/Screen";
import {MyButton} from "../Button/Button";

type CounterScreenPropsType = {
    score: number
    incButton: () => void
    resetButton: () => void
    maxValue: number
    screenValue: number | string
    disabledValue: boolean
    classInputValue: boolean
}

export function CounterScreen(props: CounterScreenPropsType) {



    return (
        <div className="globalDiv">
            <div className="screen">
                <Screen
                    classInputValue={props.classInputValue}
                    screenValue={props.screenValue}
                    score={props.score}
                    maxValue={props.maxValue}/>
            </div>
            <div className="buttons">
                <MyButton
                    disabled={props.score === props.maxValue ? true : props.disabledValue}
                    score={props.score}
                    maxValue={props.maxValue}
                    incButton={props.incButton}
                    title={"inc"}/>
                <MyButton
                    disabled={props.disabledValue}
                    resetButton={props.resetButton}
                    title={"reset"}/>
            </div>
        </div>
    )
}
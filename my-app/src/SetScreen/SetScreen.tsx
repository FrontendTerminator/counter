import React, {ChangeEvent, useState} from "react";
import {MyButton} from "../Button/Button";
import s from "./SetScreen.module.css"

type SetScreenPropsType = {
    getMaxValue: (newMaxValue: number) => void
    getMinValue: (newMinValue: number) => void
    maxValue: number
    minValue: number
    changeScore: () => void
    changeScreenValue: () => void
    setButtonValue: boolean
    classInputValue: boolean
}

export function SetScreen(props: SetScreenPropsType) {

    const clickOnButtonSet = () => {
        props.changeScore()
    }

    const readInputMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.currentTarget.valueAsNumber
        props.getMaxValue(inputValue)
    }
    const readInputMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.currentTarget.valueAsNumber
        props.getMinValue(inputValue)
    }
    const changeMyButtonBooleanValue = () => {
        props.changeScreenValue()
    }

    return (
        <div className="globalDiv">
            <div className="screen">
                <div>
                    <span>max value: </span>
                    <input
                        onClick={changeMyButtonBooleanValue}
                        value={props.maxValue}
                        onChange={readInputMaxValue}
                        className={props.classInputValue ? s.input : ""}
                        type={"number"}/>
                </div>
                <div>
                    <span>start value: </span>
                    <input
                        onClick={changeMyButtonBooleanValue}
                        value={props.minValue}
                        onChange={readInputMinValue}
                        className={props.classInputValue ? s.input : ""}
                        type={"number"}/>
                </div>
            </div>
            <div className="buttons">
                <MyButton
                    disabled={props.setButtonValue}
                    title={"set"}
                    clickOnButtonSet={clickOnButtonSet}
                />
            </div>
        </div>
    )
}
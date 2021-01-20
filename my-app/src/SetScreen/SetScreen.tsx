import React, {ChangeEvent, useState} from "react";
import {MyButton} from "../Button/Button";

type SetScreenPropsType = {
    getMaxValue: (newMaxValue: number) => void
    getMinValue: (newMinValue: number) => void
    maxValue: number
    minValue: number
    changeScore: () => void
    changeScreenValue: () => void
}

export function SetScreen(props: SetScreenPropsType) {

    let [value, setValue] = useState<boolean>(true)

    const clickOnButtonSet = () => {
        setValue(true)
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
        setValue(false)
        props.changeScreenValue()
    }

    return (
        <div className="globalDiv">
            <div className="screen">
                <input
                    onClick={changeMyButtonBooleanValue}
                    value={props.maxValue}
                    onChange={readInputMaxValue}
                    type={"number"}/>
                <input
                    onClick={changeMyButtonBooleanValue}
                    value={props.minValue}
                    onChange={readInputMinValue}
                    type={"number"}/>
            </div>
            <div className="buttons">
                <MyButton
                    disabled={value}
                    title={"set"}
                    clickOnButtonSet={clickOnButtonSet}
                />
            </div>
        </div>
    )
}
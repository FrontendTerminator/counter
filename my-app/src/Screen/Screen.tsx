import React, {useState} from "react";
import s from './Screen.module.css'

type ScreenType = {
    score: number
    maxValue: number
    screenValue: number | string
    classInputValue: boolean
}

export function Screen(props: ScreenType) {

    const changeClassName = () => {
        if (props.score === props.maxValue) {
            return s.valueOnScreen
        }
        if (props.classInputValue) {
            return s.valueOnScreen
        }
    }

    return (
        <div className={changeClassName()}>
            {props.screenValue}
        </div>
    )
}
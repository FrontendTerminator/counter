import React, {useState} from "react";
import s from './Screen.module.css'

type ScreenType = {
    score: number
    maxValue: number
    screenValue: number | string
}

export function Screen(props: ScreenType) {


    return (
        <div className={props.score === props.maxValue ? s.valueOnScreen : ""}>
            {props.screenValue}
        </div>
    )
}
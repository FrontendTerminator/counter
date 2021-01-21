import React from "react";
import s from "./Button.module.css"

type ButtonsType = {
    title: string
    incButton?: () => void
    resetButton?: () => void
    score?: number
    maxValue?: number
    disabled: boolean
    clickOnButtonSet?: () => void
}

export function MyButton(props: ButtonsType) {
    return (
        <div>
            <button
                className={s.button}
                onClick={
                    props.incButton ||
                    props.resetButton ||
                    props.clickOnButtonSet
                }
                disabled={props.disabled}
            >
                {props.title}</button>
        </div>
    )
}
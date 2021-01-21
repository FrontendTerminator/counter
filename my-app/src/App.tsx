import React, {useState} from 'react';
import './App.css';
import {SetScreen} from "./SetScreen/SetScreen";
import {CounterScreen} from "./CounterScreen/CounterScreen";

function App() {

    const stringMinValue = localStorage.getItem('minValue')
    const numberMinValue = Number(stringMinValue)
    const stringMaxValue = localStorage.getItem('maxValue')
    const numberMaxValue = Number(stringMaxValue) // Number or +

    let [score, setScore] = useState(0)
    let [maxValue, setMaxValue] = useState<number>(numberMaxValue)
    let [minValue, setMinValue] = useState<number>(numberMinValue)
    let [screenValue, setScreenValue] = useState<string | number>(0)
    let [disabledValue, setDisabledValue] = useState<boolean>(false)
    let [setButtonValue, setSetButtonValue] = useState<boolean>(true)
    let [classInputValue, setClassInputValue] = useState<boolean>(false)

    localStorage.setItem('minValue', minValue.toString())
    localStorage.setItem('maxValue', maxValue.toString())

    const changeScreenValue = () => {
        setScore(0)
        if (minValue > -1) {
            setScreenValue("Enter values and press 'set'")
            setSetButtonValue(false)
            setClassInputValue(false)
        } else {
            setScreenValue("Incorrect value!")
            setSetButtonValue(true)
            setClassInputValue(true)
        }
        if (minValue >= maxValue) {
            setScreenValue("Incorrect value!")
            setSetButtonValue(true)
            setClassInputValue(true)
        }
        setDisabledValue(true)
    }

    const changeScore = () => {
        setScore(minValue)
        setScreenValue(minValue)
        setDisabledValue(false)
        setSetButtonValue(true)
    }

    const getMaxValue = (newMaxValue: number) => {
        setMaxValue(newMaxValue)
    }

    const getMinValue = (newMinValue: number) => {
        setMinValue(newMinValue)
    }

    const incButton = () => {
        let newScore = score + 1
        if (newScore > maxValue) {
            return
        }
        setScore(newScore)
        setScreenValue(newScore)
    }

    const resetButton = () => {
        setScore(minValue)
        setScreenValue(minValue)
    }

    return (
        <div className="dom">
            <div className={"setScreen"}>
                <SetScreen
                    getMaxValue={getMaxValue}
                    maxValue={maxValue}
                    getMinValue={getMinValue}
                    minValue={minValue}
                    changeScore={changeScore}
                    changeScreenValue={changeScreenValue}
                    setButtonValue={setButtonValue}
                    classInputValue={classInputValue}
                />
            </div>
            <div className={"CounterScreen"}>
                <CounterScreen
                    score={score}
                    incButton={incButton}
                    resetButton={resetButton}
                    maxValue={maxValue}
                    screenValue={screenValue}
                    disabledValue={disabledValue}
                    classInputValue={classInputValue}
                />
            </div>
        </div>
    );
}

export default App;




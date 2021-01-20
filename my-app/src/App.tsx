import React, {useState} from 'react';
import './App.css';
import {SetScreen} from "./SetScreen/SetScreen";
import {CounterScreen} from "./CounterScreen/CounterScreen";

function App() {

    let [score, setScore] = useState(0)
    let [maxValue, setMaxValue] = useState<number>(5)
    let [minValue, setMinValue] = useState<number>(0)
    let [screenValue, setScreenValue] = useState<string | number>(0)
    let [disabledValue, setDisabledValue] = useState<boolean>(false)


    const changeScreenValue = () => {
        const screenValueMessage = "Enter values and press 'set'"
        setScreenValue(screenValueMessage)
        setDisabledValue(true)
    }

    const changeScore = () => {
        setScore(minValue)
        setScreenValue(minValue)
        setDisabledValue(false)
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

    // setScreenValue(   "Incorrect value!")

    return (
        <div>
            <SetScreen
                getMaxValue={getMaxValue}
                maxValue={maxValue}
                getMinValue={getMinValue}
                minValue={minValue}
                changeScore={changeScore}
                changeScreenValue={changeScreenValue}
            />
            <CounterScreen
                score={score}
                incButton={incButton}
                resetButton={resetButton}
                maxValue={maxValue}
                screenValue={screenValue}
                disabledValue={disabledValue}
            />
        </div>
    );
}

export default App;




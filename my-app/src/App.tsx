import React, {useState} from 'react';
import './App.css';
import {SetScreen} from "./SetScreen/SetScreen";
import {CounterScreen} from "./CounterScreen/CounterScreen";

function App() {

    let [score, setScore] = useState(0)
    let [maxValue, setMaxValue] = useState<number>(5)
    let [minValue, setMinValue] = useState<number>(0)

    const changeScore = () => {
        setScore(minValue)
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
    }

    const resetButton = () => {
        setScore(0)
    }

    return (
        <div>
            <SetScreen
                getMaxValue={getMaxValue}
                maxValue={maxValue}
                getMinValue={getMinValue}
                minValue={minValue}
                changeScore={changeScore}
            />
            <CounterScreen
                score={score}
                incButton={incButton}
                resetButton={resetButton}
                maxValue={maxValue}
            />
        </div>
    );
}

export default App;




import React, {useState} from 'react';
import './App.css';
import {Screen} from "./Screen/Screen";
import {Buttons} from "./Buttons/Button";
import {SetScreen} from "./SetScreen/SetScreen";

function App() {

    let [score, setScore] = useState(0)

    const incButton = () => {
        let newScore = score + 1
        if (newScore > 5) {
            newScore = 5
        }
        setScore(newScore)
    }

    const resetButton = () => {
        setScore(0)
    }

    return (
        <div>
            <SetScreen/>
            <div className="globalDiv">
                <div className="screen">
                    <Screen score={score}/>
                </div>
                <div className="buttons">
                    <Buttons
                        score={score}
                        incButton={incButton}
                        resetButton={resetButton}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;




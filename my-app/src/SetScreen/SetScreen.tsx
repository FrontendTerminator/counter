import React from "react";

export function SetScreen() {

    return (
        <div className="globalDiv">
            <div className="screen">
                <input type={"number"}/>
                <input type={"number"}/>
            </div>
            <div className="buttons">
                <button>x</button>
            </div>
        </div>
    )
}
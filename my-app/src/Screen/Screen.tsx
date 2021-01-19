import React from "react";

type ScreenType = {
    score: number
}

export function Screen(props: ScreenType) {
    return (
        <div className={props.score === 5 ? "red" : ""}>
            {props.score}
        </div>
    )
}
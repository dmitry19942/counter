import React from "react";

export type ButtonsPropsType = {
    incCount: () => void
    resetCount: () => void
    incButtonDisabled: boolean
    resetButtonDisabled: boolean
}

export function Buttons (props: ButtonsPropsType) {
    return(
        <div className='div-b'>
            <button className='button' onClick={props.incCount} disabled={props.incButtonDisabled} >inc</button>
            <button className='button-v' onClick={props.resetCount} disabled={props.resetButtonDisabled}>reset</button>
        </div>

    )
}
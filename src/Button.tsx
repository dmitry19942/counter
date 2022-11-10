import React from "react";

export type ButtonPropsType = {
    onClick: () => void
    disabled: boolean
}

export function Button (props: ButtonPropsType) {
    return(
        <div className='div-b'>
            <button className='button' onClick={props.onClick} disabled={props.disabled}>set</button>
        </div>
    )
}
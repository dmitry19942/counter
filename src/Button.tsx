import React from "react";

export type ButtonPropsType = {
    onClick: () => void
}

export function Button (props: ButtonPropsType) {
    return(
        <div className='div-b'>
            <button className='button' onClick={props.onClick}>set</button>
        </div>
    )
}
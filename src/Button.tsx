import React from "react";

export type ButtonPropsType = {
    id: string
    className: 'button' | 'button-v' | 'button-active'
    onClick: () => void
    disabled: boolean
    nameButton: string
}

export function Button (props: ButtonPropsType) {
    return (
            <button id={props.id} className={props.className} onClick={props.onClick} disabled={props.disabled}>{props.nameButton} </button>
    )
}
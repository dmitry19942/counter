import React from "react";

export type ButtonPropsType = {
    className: 'button' | 'button-v'
    onClick: () => void
    disabled: boolean
    nameButton: string
}

export function Button (props: ButtonPropsType) {
    return (
            <button className={props.className} onClick={props.onClick} disabled={props.disabled}>{props.nameButton}</button>
    )
}
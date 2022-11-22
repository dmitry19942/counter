import React from "react";
export type CountType = {
    value: number
    maxValue: number
    incorrectValue: boolean
    enterSetButton: boolean
}

export function Count (props: CountType) {
    return (
        <span className={props.enterSetButton ? 'span-enter-set-button' : props.incorrectValue ? 'span-incorrect-value' : props.value === props.maxValue ? 'span-v' : 'span'}>
             { props.enterSetButton ? `Enter values and press 'set'` : props.incorrectValue ? 'Incorrect value' : props.value }
        </span>
    )
}
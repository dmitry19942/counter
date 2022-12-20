import React from "react";

export type CountType = {
    value: number
    maxValue: number
    incorrectValue: boolean
    enterSetButton: boolean
}

export function Count(props: CountType) {
    return (
        <span
            className={props.enterSetButton ? 'span-enter-set-button' : props.incorrectValue ? 'span-incorrect-value' : props.value === props.maxValue ? '' : 'span'}>
             {props.enterSetButton ? `Enter values and press 'set'` : props.incorrectValue ? 'Incorrect value' : props.value === props.maxValue ?
                 <span className={'span-max-value'}>
                 <div className={'span-count'}>{props.value}</div>
                 <div className={'span-text'}>It is max value. Press 'reset'</div>
             </span> : props.value}
        </span>
    )
}
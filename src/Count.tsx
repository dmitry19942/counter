import React from "react";
export type CountType = {
    value: number
    span: string
}

export function Count (props: CountType) {
    return(
        <span className={props.span}>
            {props.value}
        </span>
    )
}
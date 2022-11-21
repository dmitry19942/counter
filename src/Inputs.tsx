import React, {ChangeEvent} from "react";

export type InputsType = {
    maxValue: number
    startValue: number
    onChangeMaxValue?: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeStartValue?: (e: ChangeEvent<HTMLInputElement>) => void
    errorMaxValue: boolean
    errorStartValue: boolean
}


export function Inputs(props: InputsType) {

    return (
        <span className='span'>
            <div style={{height: '180px'}}>
                <div >
                    <label htmlFor="ml" style={{fontSize: '25px', marginRight: '10px'}}>max value:</label>
                     <input className={props.errorMaxValue ? 'error' : 'input'} type="number" id='ml' onChange={props.onChangeMaxValue} value={props.maxValue} />
                    </div>
                <div style={{marginTop: '-5px'}}>
                    <label htmlFor="sv" style={{fontSize: '25px', marginRight: '10px'}}>start value:</label>
            <input className={props.errorStartValue ? 'error' : 'input'} type="number" id='sv' onChange={props.onChangeStartValue} value={props.startValue}/>
                    </div>
                </div>
        </span>
    )
}





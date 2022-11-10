import React, {ChangeEvent, useEffect, useState} from "react";

export type InputsType = {
    maxValue: number
    startValue: number
    onChangeMaxValue?: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeStartValue?: (e: ChangeEvent<HTMLInputElement>) => void
}


export function Inputs(props: InputsType) {

    const [error, setError] = useState<boolean>(false)

    useEffect(() => {
        if(props.startValue >= props.maxValue) {
            setError(true)
        } else if(props.startValue < props.maxValue) {
            setError(false)
        }
    }, [props.startValue, props.maxValue, error])




    return (
        <span className='span'>
            <div style={{height: '180px'}}>
                <div >
                    <label htmlFor="ml" style={{fontSize: '25px', marginRight: '10px'}}>max value:</label>
                     <input className={error ? 'error' : 'input'} type="number" id='ml' onChange={props.onChangeMaxValue} value={props.maxValue} />
                    </div>
                <div style={{marginTop: '-5px'}}>
                    <label htmlFor="sv" style={{fontSize: '25px', marginRight: '10px'}}>start value:</label>
            <input className={error ? 'error' : 'input'} type="number" id='sv' onChange={props.onChangeStartValue} value={props.startValue}/>
                    </div>
                </div>
        </span>
    )
}





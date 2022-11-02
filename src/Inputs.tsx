import React, {ChangeEvent} from "react";

export type InputsType = {
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    onChange1?: (e: ChangeEvent<HTMLInputElement>) => void
}


export function Inputs(props: InputsType) {
    return (
        <span className='span'>
            <div style={{height: '180px'}}>
                <div >
                    <label htmlFor="ml" style={{fontSize: '25px', marginRight: '10px'}}>max value:</label>
            <input className='input' type="number" id='ml' onChange={props.onChange} />
                    </div>
                <div style={{marginTop: '-5px'}}>
                    <label htmlFor="sv" style={{fontSize: '25px', marginRight: '10px'}}>start value:</label>
            <input className='input' type="number" id='sv' onChange={props.onChange1}/>
                    </div>
                </div>
        </span>
    )
}





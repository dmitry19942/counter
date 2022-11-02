import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Buttons} from "./Buttons";
import {Count} from "./Count";
import {Button} from "./Button";
import {Inputs} from "./Inputs";

function App() {


    const [count, setCount] = useState(0)
    const [maxCount, setMaxCount] = useState(10)
    const [startCount, setStartCount] = useState(0)
    const incCount = () => {
        if (count < maxCount) {
            setCount(count + 1)
        }
    }

    // const reset = () => {
    //     let startCount = localStorage.getItem('startValue')
    //     if (startCount) {
    //         let startCountFromStorage = JSON.parse(startCount)
    //         setCount(startCountFromStorage)
    //     }
    // }

    const resetCount = () => {
        setCount(startCount)
    }

    const setButton = () => {

    }
    // function changeMaxCount(newMaxCountValue: string) {
    //
    //     let MaxValue = JSON.parse(newMaxCountValue)
    //     if (MaxValue) {
    //          setMaxCount(MaxValue)
    //     }
    // }
    useEffect(() => {
        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setCount(newValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(count))
    }, [count])

    useEffect(() => {

    })


    const incButtonDisabled = count === maxCount
    const resetButtonDisabled = count === startCount

    const span = count === maxCount ? 'span-v' : 'span'

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        let newCount = e.currentTarget.value
        let newCount1 = JSON.parse(newCount)
        setMaxCount(newCount1)
    }

    const onChangeInputStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        let newCount = e.currentTarget.value
        let newCount1 = JSON.parse(newCount)
        setStartCount(newCount1)
    }

    return (
        <div className="App">
            <div className='div-v'>
                <Inputs onChange={onChangeMaxValue} onChange1={onChangeInputStartValue} />
                <Button onClick={setButton} />
            </div>
            <div className='div-v'>
                <Count value={count}
                       span={span}
                />
                <Buttons incCount={incCount}
                         resetCount={resetCount}
                         incButtonDisabled={incButtonDisabled}
                         resetButtonDisabled={resetButtonDisabled}
                />
            </div>
        </div>
    );
}

export default App;

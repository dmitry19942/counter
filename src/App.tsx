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

    const [errorMaxValue, setErrorMaxValue] = useState<boolean>(false)
    const [errorStartValue, setErrorStartValue] = useState<boolean>(false)
    const [buttonSetDisabled, setButtonSetDisabled] = useState<boolean>(false)

    useEffect(() => {
        if(startCount >= maxCount) {
            setErrorMaxValue(true)
            setErrorStartValue(true)
            setButtonSetDisabled(true)
        } else if (startCount < 0) {
            setErrorStartValue(true)
            setButtonSetDisabled(true)
        }
        else if(startCount < maxCount) {
            setErrorMaxValue(false)
            setErrorStartValue(false)
            setButtonSetDisabled(false)
        }
    }, [startCount, maxCount, errorMaxValue, errorStartValue])

    const incCount = () => {
        if (count < maxCount) {
            setCount(count + 1)
        }
    }

    const resetCount = () => {
        setCount(startCount)
    }

    const setButton = () => {
        setCount(startCount)
        setMaxCount(maxCount)
    }

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
        let maxValueAsString = localStorage.getItem('maxValue')
        if (maxValueAsString) {
            let newMaxValue = JSON.parse(maxValueAsString)
            setMaxCount(newMaxValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxCount))
    }, [maxCount])

    useEffect(() => {
        let startValueAsString = localStorage.getItem('startValue')
        if (startValueAsString) {
            let newStartValue = JSON.parse(startValueAsString)
            setStartCount(newStartValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(startCount))
    }, [startCount])


    const incButtonDisabled = count === maxCount
    const resetButtonDisabled = count === startCount

    const span = count === maxCount ? 'span-v' : 'span'

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        let newCount = JSON.parse(e.currentTarget.value)
        setMaxCount(newCount)
    }

    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        let newCount = JSON.parse(e.currentTarget.value)
        setStartCount(newCount)
    }

    return (
        <div className="App">
            <div className='div-v'>
                <Inputs maxValue={maxCount}
                        onChangeMaxValue={onChangeMaxValue}
                        startValue={startCount}
                        onChangeStartValue={onChangeStartValue}
                        errorMaxValue={errorMaxValue}
                        errorStartValue={errorStartValue}
                />
                <Button onClick={setButton}
                        disabled={buttonSetDisabled}
                />
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

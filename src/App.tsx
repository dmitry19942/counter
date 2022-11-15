import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Buttons} from "./Buttons";
import {Count} from "./Count";
import {Button} from "./Button";
import {Inputs} from "./Inputs";

function App() {


    const [count, setCount] = useState(-1)
    const [maxCount, setMaxCount] = useState(10)
    const [startCount, setStartCount] = useState(0)

    const [errorMaxValue, setErrorMaxValue] = useState<boolean>(false)
    const [errorStartValue, setErrorStartValue] = useState<boolean>(false)
    const [buttonSetDisabled, setButtonSetDisabled] = useState<boolean>(true)
    const [enterSetButton, setEnterSetButton] = useState<boolean>(false)
    const [incorrectValue, setIncorrectValue] = useState<boolean>(false)
    const [incButtonDisabled, setIncButtonDisabled] = useState<boolean>(false)
    const [resetButtonDisabled, setResetButtonDisabled] = useState<boolean>(false)


    useEffect(() => {
        if (startCount >= maxCount) {
            setErrorMaxValue(true)
            setErrorStartValue(true)
            setButtonSetDisabled(true)
            setIncorrectValue(true)
            setIncButtonDisabled(true)
            setResetButtonDisabled(true)
        }  else if (startCount < 0) {
            setErrorStartValue(true)
            setButtonSetDisabled(true)
            setIncorrectValue(true)
            setIncButtonDisabled(true)
            setResetButtonDisabled(true)
        } else if (startCount < maxCount) {
            setErrorMaxValue(false)
            setErrorStartValue(false)
            setButtonSetDisabled(false)
            setIncorrectValue(false)
        }
    }, [startCount, maxCount])

    useEffect(() => {
        if (!buttonSetDisabled) {
            setEnterSetButton(true)
        } else {
            setEnterSetButton(false)
        }
    }, [buttonSetDisabled])

    useEffect(() => {
        if (enterSetButton) {
            setIncButtonDisabled(true)
            setResetButtonDisabled(true)
        } else if (count === maxCount) {
            setIncButtonDisabled(true)
            setResetButtonDisabled(false)
        } else if (count !== maxCount) {
            setIncButtonDisabled(false)
            setResetButtonDisabled(false)
        } else if (count === startCount) {
            setResetButtonDisabled(true)
            setIncButtonDisabled(false)
        } else if (count !== startCount) {
            setResetButtonDisabled(false)
        }
    }, [enterSetButton, count, maxCount, startCount])


    useEffect(() => {
        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setCount(newValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(count))
        setButtonSetDisabled(true)
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

    const incCount = () => {
        if (count < maxCount) {
            setCount(count + 1)
        }
    }

    const resetCount = () => {
        setCount(startCount)
        setResetButtonDisabled(true)
    }

    const setButton = () => {
        setCount(startCount)
        setMaxCount(maxCount)
        setButtonSetDisabled(true)
        setEnterSetButton(false)
        setResetButtonDisabled(true)
    }

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
                       incorrectValue={incorrectValue}
                       enterSetButton={enterSetButton}
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

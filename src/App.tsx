import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
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
        }  else if (startCount < 0) {
            setErrorStartValue(true)
            setButtonSetDisabled(true)
            setIncorrectValue(true)
        } else if (startCount < maxCount) {
            setErrorMaxValue(false)
            setErrorStartValue(false)
            setButtonSetDisabled(false)
            setIncorrectValue(false)
        }
    }, [startCount, maxCount])

    useEffect(() => {
        if(maxCount <= 0) {
            setErrorMaxValue(true)
        } else if (maxCount > 0 && maxCount > startCount) {
            setErrorMaxValue(false)
        }
    }, [maxCount, startCount])

    useEffect(() => {
        if(!incorrectValue && !errorStartValue && !errorMaxValue) {
            setIncButtonDisabled(false)
            setResetButtonDisabled(false)
        } else if(incorrectValue) {
            setIncButtonDisabled(true)
            setResetButtonDisabled(true)
        } else if(errorStartValue || errorMaxValue) {
            setIncButtonDisabled(true)
            setResetButtonDisabled(true)
        }
    }, [incorrectValue, errorStartValue, errorMaxValue])

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
        } else if (count === maxCount && !incorrectValue) {
            setIncButtonDisabled(true)
            setResetButtonDisabled(false)
        } else if (count !== maxCount && count !== startCount && !incorrectValue) {
            setIncButtonDisabled(false)
            setResetButtonDisabled(false)
        } else if (count === startCount && !incorrectValue) {
            setResetButtonDisabled(true)
            setIncButtonDisabled(false)
        } else if (count !== startCount && !incorrectValue) {
            setResetButtonDisabled(false)
        }
    }, [enterSetButton, count, maxCount, startCount, incorrectValue])


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
                <div className='div-b'>
                    <Button className={'button'}
                            nameButton={'set'}
                            onClick={setButton}
                            disabled={buttonSetDisabled}
                    />
                </div>
            </div>
            <div className='div-v'>
                <Count value={count}
                       span={span}
                       incorrectValue={incorrectValue}
                       enterSetButton={enterSetButton}
                />
                <div className='div-b'>
                    <Button className={'button'}
                            onClick={incCount}
                            disabled={incButtonDisabled}
                            nameButton={'inc'}
                    />
                    <Button className={'button-v'}
                            onClick={resetCount}
                            disabled={resetButtonDisabled}
                            nameButton={'reset'}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;

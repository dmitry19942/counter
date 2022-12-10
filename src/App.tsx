import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react';
import './App.css';
import {Count} from "./Count";
import {Button} from "./Button";
import {Inputs} from "./Inputs";

function App() {

    const [count, setCount] = useState(0)
    const [maxCount, setMaxCount] = useState(10)
    const [startCount, setStartCount] = useState(0)

    const [errorMaxValue, setErrorMaxValue] = useState<boolean>(false)
    const [errorStartValue, setErrorStartValue] = useState<boolean>(false)
    const [buttonSetDisabled, setButtonSetDisabled] = useState<boolean>(true)
    const [enterSetButton, setEnterSetButton] = useState<boolean>(false)
    const [incorrectValue, setIncorrectValue] = useState<boolean>(false)
    const [incButtonDisabled, setIncButtonDisabled] = useState<boolean>(false)
    const [resetButtonDisabled, setResetButtonDisabled] = useState<boolean>(false)
    const [activeButtonInc, setActiveButtonInc] = useState<boolean>(false)


    useEffect(() => {
        if (startCount === null) {
            setErrorMaxValue(true)
            setErrorStartValue(true)
            setButtonSetDisabled(true)
            setIncorrectValue(true)
        } else if (startCount >= maxCount) {
            setErrorMaxValue(true)
            setErrorStartValue(true)
            setButtonSetDisabled(true)
            setIncorrectValue(true)
        } else if (startCount < 0) {
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
        if (maxCount <= 0) {
            setErrorMaxValue(true)
        } else if (maxCount > 0 && maxCount > startCount) {
            setErrorMaxValue(false)
        }
    }, [maxCount, startCount])

    useEffect(() => {
        if (!incorrectValue && !errorStartValue && !errorMaxValue) {
            setIncButtonDisabled(false)
            setResetButtonDisabled(false)
        } else if (incorrectValue) {
            setIncButtonDisabled(true)
            setResetButtonDisabled(true)
        } else if (errorStartValue || errorMaxValue) {
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

    const activeButtonIncChanged = () => {
        setActiveButtonInc(false)
    }

    const incCount = () => {
        if (count < maxCount) {
            setCount(count + 1)
            setActiveButtonInc(true)
            setTimeout(activeButtonIncChanged, 100)
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

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.currentTarget.value) {
            setErrorMaxValue(true)
            setErrorStartValue(true)
            setButtonSetDisabled(true)
            setIncorrectValue(true)
        }
        setMaxCount(parseInt(e.currentTarget.value))
    }

    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.currentTarget.value) {
            setErrorMaxValue(true)
            setErrorStartValue(true)
            setButtonSetDisabled(true)
            setIncorrectValue(true)
        }
        setStartCount(parseInt(e.currentTarget.value))
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        const focusButtonSet = document.getElementById('button-set')
        if (e.key === 'Enter' && focusButtonSet) {
            setButton()
            focusButtonSet.focus()
        }
    }

    return (
        <div className="App">
            <div className='div-value'>
                <Inputs maxValue={maxCount}
                        onChangeMaxValue={onChangeMaxValue}
                        startValue={startCount}
                        onChangeStartValue={onChangeStartValue}
                        errorMaxValue={errorMaxValue}
                        errorStartValue={errorStartValue}
                        onKeyPress={onKeyPressHandler}
                />
                <div className='div-button'>
                    <Button id={'button-set'}
                            className={'button'}
                            nameButton={'set'}
                            onClick={setButton}
                            disabled={buttonSetDisabled}
                    />
                </div>
            </div>
            <div className='div-value'>
                <Count value={count}
                       maxValue={maxCount}
                       incorrectValue={incorrectValue}
                       enterSetButton={enterSetButton}
                />
                <div className='div-button'>
                    <Button id={'button-inc'}
                            className={activeButtonInc ? 'button-active' : 'button'}
                            onClick={incCount}
                            disabled={incButtonDisabled}
                            nameButton={'inc'}
                    />
                    <Button id={'button-reset'}
                            className={'button-v'}
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

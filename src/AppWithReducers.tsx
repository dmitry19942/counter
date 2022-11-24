import React, {ChangeEvent, useReducer} from 'react';
import './App.css';
import {Count} from "./Count";
import {Button} from "./Button";
import {Inputs} from "./Inputs";
import {
    ChangeMaxValueAC,
    ChangeStartValueAC,
    counterReducer,
    IncCountAC,
    ResetCountAC,
    SetButtonAC
} from "./counter-reducer";

export type CounterStateType = {
    count: number
    maxCount: number
    startCount: number
    errorMaxValue: boolean
    errorStartValue: boolean
    buttonSetDisabled: boolean
    enterSetButton: boolean
    incorrectValue: boolean
    incButtonDisabled: boolean
    resetButtonDisabled: boolean
}

function AppWithReducers() {

    const [counter, dispatchToCounter] = useReducer(counterReducer, {
        count: -1,
        maxCount: 10,
        startCount: 0,
        errorMaxValue: false,
        errorStartValue: false,
        buttonSetDisabled: true,
        enterSetButton: false,
        incorrectValue: false,
        incButtonDisabled: false,
        resetButtonDisabled: false
    })
    // const [count, dispatchToCount] = useReducer(counterReducer, -1)
    // const [maxCount, dispatchToMaxCount] = useReducer(counterReducer, 10)
    // const [startCount, dispatchToStartCount] = useReducer(counterReducer, 0)
    //
    // const [errorMaxValue, dispatchToErrorMaxValue] = useReducer(counterReducer, false)
    // const [errorStartValue, dispatchToErrorStartValue] = useReducer(counterReducer, false)
    // const [buttonSetDisabled, dispatchToButtonSetDisabled] = useReducer(counterReducer, true)
    // const [enterSetButton, dispatchToEnterSetButton] = useReducer(counterReducer, false)
    // const [incorrectValue, dispatchToIncorrectValue] = useReducer(counterReducer, false)
    // const [incButtonDisabled, dispatchToIncButtonDisabled] = useReducer(counterReducer, false)
    // const [resetButtonDisabled, dispatchToResetButtonDisabled] = useReducer(counterReducer, false)


    // useEffect(() => {
    //     if (counter.startCount >= counter.maxCount) {
    //         setErrorMaxValue(true)
    //         setErrorStartValue(true)
    //         setButtonSetDisabled(true)
    //         setIncorrectValue(true)
    //     } else if (counter.startCount < 0) {
    //         setErrorStartValue(true)
    //         setButtonSetDisabled(true)
    //         setIncorrectValue(true)
    //     } else if (counter.startCount < counter.maxCount) {
    //         setErrorMaxValue(false)
    //         setErrorStartValue(false)
    //         setButtonSetDisabled(false)
    //         setIncorrectValue(false)
    //     }
    // }, [counter.startCount, counter.maxCount])
    //
    // useEffect(() => {
    //     if (counter.maxCount <= 0) {
    //         setErrorMaxValue(true)
    //     } else if (counter.maxCount > 0 && counter.maxCount > counter.startCount) {
    //         setErrorMaxValue(false)
    //     }
    // }, [counter.maxCount, counter.startCount])
    //
    // useEffect(() => {
    //     if (!counter.incorrectValue && !counter.errorStartValue && !counter.errorMaxValue) {
    //         setIncButtonDisabled(false)
    //         setResetButtonDisabled(false)
    //     } else if (counter.incorrectValue) {
    //         setIncButtonDisabled(true)
    //         setResetButtonDisabled(true)
    //     } else if (counter.errorStartValue || counter.errorMaxValue) {
    //         setIncButtonDisabled(true)
    //         setResetButtonDisabled(true)
    //     }
    // }, [counter.incorrectValue, counter.errorStartValue, counter.errorMaxValue])
    //
    // useEffect(() => {
    //     if (!counter.buttonSetDisabled) {
    //         setEnterSetButton(true)
    //     } else {
    //         setEnterSetButton(false)
    //     }
    // }, [counter.buttonSetDisabled])
    //
    // useEffect(() => {
    //     if (counter.enterSetButton) {
    //         setIncButtonDisabled(true)
    //         setResetButtonDisabled(true)
    //     } else if (counter.count === counter.maxCount && !counter.incorrectValue) {
    //         setIncButtonDisabled(true)
    //         setResetButtonDisabled(false)
    //     } else if (counter.count !== counter.maxCount && counter.count !== counter.startCount && !counter.incorrectValue) {
    //         setIncButtonDisabled(false)
    //         setResetButtonDisabled(false)
    //     } else if (counter.count === counter.startCount && !counter.incorrectValue) {
    //         setResetButtonDisabled(true)
    //         setIncButtonDisabled(false)
    //     } else if (counter.count !== counter.startCount && !counter.incorrectValue) {
    //         setResetButtonDisabled(false)
    //     }
    // }, [counter.enterSetButton, counter.count, counter.maxCount, counter.startCount, counter.incorrectValue])
    //
    // useEffect(() => {
    //     let valueAsString = localStorage.getItem('counterValue')
    //     if (valueAsString) {
    //         let newValue = JSON.parse(valueAsString)
    //         setCount(newValue)
    //     }
    // }, [])
    //
    // useEffect(() => {
    //     localStorage.setItem('counterValue', JSON.stringify(counter.count))
    //     setButtonSetDisabled(true)
    // }, [counter.count])
    //
    // useEffect(() => {
    //     let maxValueAsString = localStorage.getItem('maxValue')
    //     if (maxValueAsString) {
    //         let newMaxValue = JSON.parse(maxValueAsString)
    //         setMaxCount(newMaxValue)
    //     }
    // }, [])
    //
    // useEffect(() => {
    //     localStorage.setItem('maxValue', JSON.stringify(counter.maxCount))
    // }, [counter.maxCount])
    //
    // useEffect(() => {
    //     let startValueAsString = localStorage.getItem('startValue')
    //     if (startValueAsString) {
    //         let newStartValue = JSON.parse(startValueAsString)
    //         setStartCount(newStartValue)
    //     }
    // }, [])
    //
    // useEffect(() => {
    //     localStorage.setItem('startValue', JSON.stringify(counter.startCount))
    // }, [counter.startCount])

    const incCount = () => {
        if (counter.count < counter.maxCount) {
            const action = IncCountAC(counter.count)
            dispatchToCounter(action)
        }
    }

    const resetCount = () => {
        const action = ResetCountAC(counter.startCount, counter.resetButtonDisabled)
        dispatchToCounter(action)
    }

    const setButton = () => {
        const action = SetButtonAC(counter.startCount, counter.maxCount, counter.buttonSetDisabled, counter.enterSetButton, counter.resetButtonDisabled)
        dispatchToCounter(action)
    }

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        const action = ChangeMaxValueAC(parseInt(e.currentTarget.value))
        dispatchToCounter(action)
    }

    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        const action = ChangeStartValueAC(parseInt(e.currentTarget.value))
        dispatchToCounter(action)
    }

    return (
        <div className="App">
            <div className='div-v'>
                <Inputs maxValue={counter.maxCount}
                        onChangeMaxValue={onChangeMaxValue}
                        startValue={counter.startCount}
                        onChangeStartValue={onChangeStartValue}
                        errorMaxValue={counter.errorMaxValue}
                        errorStartValue={counter.errorStartValue}
                />
                <div className='div-b'>
                    <Button className={'button'}
                            nameButton={'set'}
                            onClick={setButton}
                            disabled={counter.buttonSetDisabled}
                    />
                </div>
            </div>
            <div className='div-v'>
                <Count value={counter.count}
                       maxValue={counter.maxCount}
                       incorrectValue={counter.incorrectValue}
                       enterSetButton={counter.enterSetButton}
                />
                <div className='div-b'>
                    <Button className={'button'}
                            onClick={incCount}
                            disabled={counter.incButtonDisabled}
                            nameButton={'inc'}
                    />
                    <Button className={'button-v'}
                            onClick={resetCount}
                            disabled={counter.resetButtonDisabled}
                            nameButton={'reset'}
                    />
                </div>
            </div>
        </div>
    );
}

export default AppWithReducers;

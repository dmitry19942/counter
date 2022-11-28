import React, {ChangeEvent, useEffect, useReducer} from 'react';
import './App.css';
import {Count} from "./Count";
import {Button} from "./Button";
import {Inputs} from "./Inputs";
import {
    ChangeMaxValueAC,
    ChangeStartValueAC,
    counterReducer, EnterSetButtonTitleShowAC, IncAndResetButtonDisabledAC,
    IncCountAC, MaxValueIsCorrectAC, ResetButtonDisabledAC,
    ResetCountAC,
    SetButtonAC, StartValueMaxValueIsCorrectAC
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
        count: 0,
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

    useEffect(() => {
        if (counter.startCount >= counter.maxCount) {
            dispatchToCounter(StartValueMaxValueIsCorrectAC(true, true, true, true))
        } else if (counter.startCount < 0) {
            dispatchToCounter(StartValueMaxValueIsCorrectAC(false, true, true, true))
        } else if (counter.startCount < counter.maxCount) {
            dispatchToCounter(StartValueMaxValueIsCorrectAC(false, false, false, false))
        }
    }, [counter.startCount, counter.maxCount])

    useEffect(() => {
        if (counter.maxCount <= 0) {
            const action = MaxValueIsCorrectAC(true)
            dispatchToCounter(action)
        } else if (counter.maxCount > 0 && counter.maxCount > counter.startCount) {
            const action = MaxValueIsCorrectAC(false)
            dispatchToCounter(action)
        }
    }, [counter.maxCount, counter.startCount])

    useEffect(() => {
        if (!counter.incorrectValue && !counter.errorStartValue && !counter.errorMaxValue) {
            dispatchToCounter(IncAndResetButtonDisabledAC(false, false))
        } else if (counter.incorrectValue) {
            dispatchToCounter(IncAndResetButtonDisabledAC(true, true))
        } else if (counter.errorStartValue || counter.errorMaxValue) {
            dispatchToCounter(IncAndResetButtonDisabledAC(true, true))
        }
    }, [counter.incorrectValue, counter.errorStartValue, counter.errorMaxValue])

    useEffect(() => {
        if (!counter.buttonSetDisabled) {
            dispatchToCounter(EnterSetButtonTitleShowAC(true))
        } else {
            dispatchToCounter(EnterSetButtonTitleShowAC(false))
        }
    }, [counter.buttonSetDisabled])

    useEffect(() => {
        if (counter.enterSetButton) {
            dispatchToCounter(IncAndResetButtonDisabledAC(true, true))
        } else if (counter.count === counter.maxCount && !counter.incorrectValue) {
            dispatchToCounter(IncAndResetButtonDisabledAC(true, false))
        } else if (counter.count !== counter.maxCount && counter.count !== counter.startCount && !counter.incorrectValue) {
            dispatchToCounter(IncAndResetButtonDisabledAC(false, false))
        } else if (counter.count === counter.startCount && !counter.incorrectValue) {
            dispatchToCounter(IncAndResetButtonDisabledAC(false, true))
        } else if (counter.count !== counter.startCount && !counter.incorrectValue) {
            dispatchToCounter(ResetButtonDisabledAC(false))
        }
    }, [counter.enterSetButton, counter.count, counter.maxCount, counter.startCount, counter.incorrectValue])

    const incCount = () => {
        if (counter.count < counter.maxCount) {
            dispatchToCounter(IncCountAC(counter.count))
        }
    }

    const resetCount = () => {
        dispatchToCounter(ResetCountAC(counter.startCount, counter.resetButtonDisabled))
    }

    const setButton = () => {
        dispatchToCounter(SetButtonAC(counter.startCount, counter.maxCount, counter.buttonSetDisabled, counter.enterSetButton, counter.resetButtonDisabled))
    }

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatchToCounter(ChangeMaxValueAC(parseInt(e.currentTarget.value)))
    }

    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatchToCounter(ChangeStartValueAC(parseInt(e.currentTarget.value)))
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

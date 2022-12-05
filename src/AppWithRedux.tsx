import React, {ChangeEvent, useEffect} from 'react';
import './App.css';
import {Count} from "./Count";
import {Button} from "./Button";
import {Inputs} from "./Inputs";
import {
    ChangeMaxValueAC,
    ChangeStartValueAC,
    EnterSetButtonTitleShowAC, IncAndResetButtonDisabledAC, IncCountAC,
    MaxValueIsCorrectAC, ResetButtonDisabledAC,
    ResetCountAC,
    SetButtonAC, StartValueMaxValueIsCorrectAC
} from "./counter-reducer";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./store";

// types
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

// component
function AppWithRedux() {

    const dispatch = useDispatch()

    const counter = useSelector<RootState, CounterStateType>(state => state.counter)

    useEffect(() => {
        if (counter.startCount >= counter.maxCount) {
            dispatch(StartValueMaxValueIsCorrectAC(true, true, true, true))
        } else if (counter.startCount < 0) {
            dispatch(StartValueMaxValueIsCorrectAC(false, true, true, true))
        } else if (counter.startCount < counter.maxCount) {
            dispatch(StartValueMaxValueIsCorrectAC(false, false, false, false))
        }
    }, [counter.startCount, counter.maxCount, dispatch])

    useEffect(() => {
        if (counter.maxCount <= 0) {
            const action = MaxValueIsCorrectAC(true)
            dispatch(action)
        } else if (counter.maxCount > 0 && counter.maxCount > counter.startCount) {
            const action = MaxValueIsCorrectAC(false)
            dispatch(action)
        }
    }, [counter.maxCount, counter.startCount, dispatch])

    useEffect(() => {
        if (!counter.incorrectValue && !counter.errorStartValue && !counter.errorMaxValue) {
            dispatch(IncAndResetButtonDisabledAC(false, false))
        } else if (counter.incorrectValue) {
            dispatch(IncAndResetButtonDisabledAC(true, true))
        } else if (counter.errorStartValue || counter.errorMaxValue) {
            dispatch(IncAndResetButtonDisabledAC(true, true))
        }
    }, [counter.incorrectValue, counter.errorStartValue, counter.errorMaxValue, dispatch])

    useEffect(() => {
        if (!counter.buttonSetDisabled) {
            dispatch(EnterSetButtonTitleShowAC(true))
        } else {
            dispatch(EnterSetButtonTitleShowAC(false))
        }
    }, [counter.buttonSetDisabled, dispatch])

    useEffect(() => {
        if (counter.enterSetButton) {
            dispatch(IncAndResetButtonDisabledAC(true, true))
        } else if (counter.count === counter.maxCount && !counter.incorrectValue) {
            dispatch(IncAndResetButtonDisabledAC(true, false))
        } else if (counter.count !== counter.maxCount && counter.count !== counter.startCount && !counter.incorrectValue) {
            dispatch(IncAndResetButtonDisabledAC(false, false))
        } else if (counter.count === counter.startCount && !counter.incorrectValue) {
            dispatch(IncAndResetButtonDisabledAC(false, true))
        } else if (counter.count !== counter.startCount && !counter.incorrectValue) {
            dispatch(ResetButtonDisabledAC(false))
        }
    }, [counter.enterSetButton, counter.count, counter.maxCount, counter.startCount, counter.incorrectValue, dispatch])


    const incCount = () => {
        if (counter.count < counter.maxCount) {
            dispatch(IncCountAC(counter.count))
        }
    }

    const resetCount = () => {
        dispatch(ResetCountAC(counter.startCount, counter.resetButtonDisabled))
    }

    const setButton = () => {
        dispatch(SetButtonAC(counter.startCount, counter.maxCount, counter.buttonSetDisabled, counter.enterSetButton, counter.resetButtonDisabled))
    }

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(ChangeMaxValueAC(parseInt(e.currentTarget.value)))
    }

    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(ChangeStartValueAC(parseInt(e.currentTarget.value)))
    }

    return (
        <div className="App">
            <div className='div-value'>
                <Inputs maxValue={counter.maxCount}
                        onChangeMaxValue={onChangeMaxValue}
                        startValue={counter.startCount}
                        onChangeStartValue={onChangeStartValue}
                        errorMaxValue={counter.errorMaxValue}
                        errorStartValue={counter.errorStartValue}
                />
                <div className='div-button'>
                    <Button className={'button'}
                            nameButton={'set'}
                            onClick={setButton}
                            disabled={counter.buttonSetDisabled}
                    />
                </div>
            </div>
            <div className='div-value'>
                <Count value={counter.count}
                       maxValue={counter.maxCount}
                       incorrectValue={counter.incorrectValue}
                       enterSetButton={counter.enterSetButton}
                />
                <div className='div-button'>
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

export default AppWithRedux;

import React, {ChangeEvent, KeyboardEvent, SetStateAction, useEffect} from 'react';
import './App.css';
import {Count} from "../components/Count";
import {Button} from "../components/Button";
import {Inputs} from "../components/Inputs";
import {
    ActiveButtonIncAC,
    ChangeMaxValueAC,
    ChangeStartValueAC,
    EnterSetButtonTitleShowAC,
    IncAndResetAndAutoButtonDisabledAC,
    IncAndResetButtonDisabledAC,
    IncButtonDisabledAC,
    IncCountAC,
    MaxValueIsCorrectAC,
    ResetAutoButtonDisabledAC,
    ResetButtonDisabledAC,
    ResetCountAC,
    SetButtonAC,
    StartValueMaxValueIsCorrectAC,
    ToggleAutoButtonDisabledAC,
    toggleAutoModeCounterTC
} from "../state/counter-reducer";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../state/store";

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
    activeButtonInc: boolean
    autoButtonDisabled: boolean
    timerId: SetStateAction<any>
}

// component
function AppWithRedux() {

    const dispatch = useDispatch()

    const counter = useSelector<RootState, CounterStateType>(state => state.counter)

    useEffect(() => {
        if (counter.startCount === null) {
            dispatch(StartValueMaxValueIsCorrectAC(true, true, true, true))
        } else if (counter.startCount >= counter.maxCount) {
            dispatch(StartValueMaxValueIsCorrectAC(true, true, true, true))
        } else if (counter.startCount < 0) {
            dispatch(StartValueMaxValueIsCorrectAC(false, true, true, true))
        } else if (counter.startCount < counter.maxCount) {
            dispatch(StartValueMaxValueIsCorrectAC(false, false, false, false))
        }
    }, [counter.startCount, counter.maxCount, dispatch])

    useEffect(() => {
        if (counter.maxCount <= 0) {
            dispatch(MaxValueIsCorrectAC(true))
        } else if (counter.maxCount > 0 && counter.maxCount > counter.startCount) {
            dispatch(MaxValueIsCorrectAC(false))
        }
    }, [counter.maxCount, counter.startCount, dispatch])

    useEffect(() => {
        if (!counter.incorrectValue && !counter.errorStartValue && !counter.errorMaxValue) {
            dispatch(IncAndResetAndAutoButtonDisabledAC(false, false, false))
        } else if (counter.incorrectValue) {
            dispatch(IncAndResetAndAutoButtonDisabledAC(true, true, true))
        } else if (counter.errorStartValue || counter.errorMaxValue) {
            dispatch(IncAndResetAndAutoButtonDisabledAC(true, true, true))
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
            dispatch(IncAndResetAndAutoButtonDisabledAC(true, true, true))
        } else if (counter.count === counter.maxCount && !counter.incorrectValue) {
            dispatch(IncAndResetAndAutoButtonDisabledAC(true, false, true))
        } else if (counter.count !== counter.maxCount && counter.count !== counter.startCount && !counter.incorrectValue && !counter.autoButtonDisabled) {
            dispatch(IncAndResetButtonDisabledAC(false, false))
        } else if (counter.count === counter.startCount && !counter.incorrectValue) {
            dispatch(IncAndResetButtonDisabledAC(false, true))
        } else if (counter.count !== counter.startCount && !counter.incorrectValue) {
            dispatch(ResetButtonDisabledAC(false))
        }
    }, [counter.enterSetButton, counter.count, counter.maxCount, counter.startCount, counter.incorrectValue, counter.autoButtonDisabled, dispatch])

    useEffect(() => {
        dispatch(toggleAutoModeCounterTC())
    }, [counter.count, counter.autoButtonDisabled, dispatch])

    useEffect(() => {
        if (counter.autoButtonDisabled) {
            dispatch(IncButtonDisabledAC())
        }
    }, [counter.autoButtonDisabled, dispatch])


    const activeButtonInc = () => {
        dispatch(ActiveButtonIncAC(false))
    }

    const incCount = () => {
        if (counter.count < counter.maxCount) {
            dispatch(IncCountAC(counter.count))
            dispatch(ActiveButtonIncAC(true))
            setTimeout(activeButtonInc, 100)
        }
    }

    const resetCount = () => {
        counter.timerId && clearTimeout(counter.timerId)
        dispatch(ResetCountAC(counter.startCount, counter.resetButtonDisabled))
        dispatch(ResetAutoButtonDisabledAC())
    }

    const setButton = () => {
        counter.timerId && clearTimeout(counter.timerId)
        dispatch(SetButtonAC(counter.startCount, counter.maxCount, counter.buttonSetDisabled, counter.enterSetButton, counter.resetButtonDisabled))
        dispatch(ResetAutoButtonDisabledAC())
    }

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.currentTarget.value) {
            dispatch(StartValueMaxValueIsCorrectAC(true, true, true, true))
        }
        dispatch(ChangeMaxValueAC(parseInt(e.currentTarget.value)))
    }

    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.currentTarget.value) {
            dispatch(StartValueMaxValueIsCorrectAC(true, true, true, true))
        }
        dispatch(ChangeStartValueAC(parseInt(e.currentTarget.value)))
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        const focusButtonSet = document.getElementById('button-set')
        if (e.key === 'Enter' && focusButtonSet) {
            setButton()
            focusButtonSet.focus()
        }
    }

    const autoIncCount = () => {
        counter.timerId && clearTimeout(counter.timerId)
        dispatch(ToggleAutoButtonDisabledAC())
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
                        onKeyPress={onKeyPressHandler}
                />
                <div className='div-button'>
                    <Button id={'button-set'}
                            className={'button'}
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
                    <Button id={'button-inc'}
                            className={counter.activeButtonInc ? 'button-active' : 'button'}
                            onClick={incCount}
                            disabled={counter.incButtonDisabled}
                            nameButton={'inc'}
                    />
                    <Button id={'button-reset'}
                            className={'button-v'}
                            onClick={resetCount}
                            disabled={counter.resetButtonDisabled}
                            nameButton={'reset'}
                    />
                    <Button id={'button-auto'}
                            className={'button-v'}
                            onClick={autoIncCount}
                            disabled={counter.autoButtonDisabled}
                            nameButton={'auto'}
                    />
                </div>
            </div>
        </div>
    );
}

export default AppWithRedux;

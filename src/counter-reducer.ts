import {CounterStateType} from "./AppWithRedux";
import {Dispatch} from "redux";
import {RootState} from "./store";
import {SetStateAction} from "react";

// types
type IncCountActionType = {
    type: 'INC-COUNT'
    count: number
}
type ChangeMaxCountActionType = {
    type: 'CHANGE-MAX-VALUE',
    maxCount: number
}
type ChangeStartCountActionType = {
    type: 'CHANGE-START-VALUE',
    startCount: number
}
type ResetCountActionType = {
    type: 'RESET-COUNT',
    count: number,
    resetButtonDisabled: boolean
}
type SetButtonActionType = {
    type: 'SET-BUTTON',
    count: number,
    maxCount: number,
    buttonSetDisabled: boolean,
    enterSetButton: boolean,
    resetButtonDisabled: boolean
}
type StartValueMaxValueIsCorrectActionType = {
    type: 'START-VALUE-MAX-VALUE-IS-CORRECT',
    errorMaxValue: boolean,
    errorStartValue: boolean,
    buttonSetDisabled: boolean,
    incorrectValue: boolean
}
type MaxValueIsCorrectActionType = {
    type: 'MAX-VALUE-IS-CORRECT',
    errorMaxValue: boolean
}
type IncAndResetButtonDisabledActionType = {
    type: 'INC-AND-RESET-BUTTON-DISABLED',
    incButtonDisabled: boolean,
    resetButtonDisabled: boolean
}
type IncAndResetAndAutoButtonDisabledActionType = {
    type: 'INC-AND-RESET-AND-AUTO-BUTTON-DISABLED',
    incButtonDisabled: boolean,
    resetButtonDisabled: boolean,
    autoButtonDisabled: boolean
}
type EnterSetButtonTitleShowActionType = {
    type: 'ENTER-SET-BUTTON-TITLE-SHOW',
    enterSetButton: boolean
}
type ResetButtonDisabledActionType = {
    type: 'RESET-BUTTON-DISABLED',
    resetButtonDisabled: boolean
}
type ActiveButtonIncActionType = {
    type: 'ACTIVE-BUTTON-INC',
    activeButtonInc: boolean
}
type SetTimerIdActionType = {
    type: 'SET-TIMER-ID',
    timerId: SetStateAction<any>
}
type ToggleAutoButtonDisabledActionType = {
    type: 'TOGGLE-AUTO-BUTTON-DISABLED'
}
type ResetAutoButtonDisabledActionType = {
    type: 'RESET-AUTO-BUTTON-DISABLED'
}
type IncButtonDisabledActionType = {
    type: 'INC-BUTTON-DISABLED'
}

export type ActionsType = IncCountActionType | ChangeMaxCountActionType | ChangeStartCountActionType | ResetCountActionType | SetButtonActionType | StartValueMaxValueIsCorrectActionType | MaxValueIsCorrectActionType | IncAndResetButtonDisabledActionType | IncAndResetAndAutoButtonDisabledActionType | EnterSetButtonTitleShowActionType | ResetButtonDisabledActionType | ActiveButtonIncActionType | SetTimerIdActionType | ToggleAutoButtonDisabledActionType | ResetAutoButtonDisabledActionType | IncButtonDisabledActionType

// state
const initialState: CounterStateType = {
    count: 0,
    maxCount: 10,
    startCount: 0,
    errorMaxValue: false,
    errorStartValue: false,
    buttonSetDisabled: true,
    enterSetButton: false,
    incorrectValue: false,
    incButtonDisabled: false,
    resetButtonDisabled: false,
    activeButtonInc: false,
    autoButtonDisabled: false,
    timerId: 0
}

export const counterReducer = (state: CounterStateType = initialState, action: ActionsType): CounterStateType => {
    switch (action.type) {
        case 'INC-COUNT': {
            return {...state, count: action.count + 1 }
        }
        case 'CHANGE-MAX-VALUE': {
            return {...state, maxCount: action.maxCount}
        }
        case 'CHANGE-START-VALUE': {
            return {...state, startCount: action.startCount}
        }
        case 'RESET-COUNT': {
            return {...state, count: action.count, resetButtonDisabled: true}
        }
        case 'SET-BUTTON': {
            return {...state, count: action.count, maxCount: action.maxCount, buttonSetDisabled: true, enterSetButton: false, resetButtonDisabled: true}
        }
        case 'START-VALUE-MAX-VALUE-IS-CORRECT': {
            return {...state, errorMaxValue: action.errorMaxValue, errorStartValue: action.errorStartValue, buttonSetDisabled: action.buttonSetDisabled, incorrectValue: action.incorrectValue}
        }
        case 'MAX-VALUE-IS-CORRECT': {
            return {...state, errorMaxValue: action.errorMaxValue}
        }
        case 'INC-AND-RESET-BUTTON-DISABLED': {
            return {...state, incButtonDisabled: action.incButtonDisabled, resetButtonDisabled: action.resetButtonDisabled}
        }
        case 'INC-AND-RESET-AND-AUTO-BUTTON-DISABLED': {
            return {...state, incButtonDisabled: action.incButtonDisabled, resetButtonDisabled: action.resetButtonDisabled, autoButtonDisabled: action.autoButtonDisabled}
        }
        case 'ENTER-SET-BUTTON-TITLE-SHOW': {
            return {...state, enterSetButton: action.enterSetButton}
        }
        case 'RESET-BUTTON-DISABLED': {
            return {...state, resetButtonDisabled: action.resetButtonDisabled}
        }
        case 'ACTIVE-BUTTON-INC': {
            return {...state, activeButtonInc: action.activeButtonInc}
        }
        case 'SET-TIMER-ID': {
            return {...state, timerId: action.timerId}
        }
        case 'TOGGLE-AUTO-BUTTON-DISABLED': {
            return {...state, autoButtonDisabled: !state.autoButtonDisabled}
        }
        case 'RESET-AUTO-BUTTON-DISABLED': {
            return {...state, autoButtonDisabled: false}
        }
        case 'INC-BUTTON-DISABLED': {
            return {...state, incButtonDisabled: true}
        }
        default:
            return state
    }
}

// actions
export const IncCountAC = (count: number): IncCountActionType => {
    return {type: 'INC-COUNT', count}
}
export const ChangeMaxValueAC = (maxCount: number): ChangeMaxCountActionType => {
    return {type: 'CHANGE-MAX-VALUE', maxCount}
}
export const ChangeStartValueAC = (startCount: number): ChangeStartCountActionType => {
    return {type: 'CHANGE-START-VALUE', startCount}
}
export const ResetCountAC = (count: number, resetButtonDisabled: boolean): ResetCountActionType => {
    return {type: 'RESET-COUNT', count, resetButtonDisabled}
}
export const SetButtonAC = (count: number, maxCount: number, buttonSetDisabled: boolean, enterSetButton: boolean, resetButtonDisabled: boolean): SetButtonActionType => {
    return {type: 'SET-BUTTON', count, maxCount, buttonSetDisabled, enterSetButton, resetButtonDisabled}
}
export const StartValueMaxValueIsCorrectAC = (errorMaxValue: boolean, errorStartValue: boolean, buttonSetDisabled: boolean, incorrectValue: boolean): StartValueMaxValueIsCorrectActionType => {
    return {type: 'START-VALUE-MAX-VALUE-IS-CORRECT', errorMaxValue, errorStartValue, buttonSetDisabled, incorrectValue}
}
export const MaxValueIsCorrectAC = (errorMaxValue: boolean): MaxValueIsCorrectActionType => {
    return {type: 'MAX-VALUE-IS-CORRECT', errorMaxValue}
}
export const IncAndResetButtonDisabledAC = (incButtonDisabled: boolean, resetButtonDisabled: boolean): IncAndResetButtonDisabledActionType => {
    return {type: 'INC-AND-RESET-BUTTON-DISABLED', incButtonDisabled, resetButtonDisabled}
}
export const IncAndResetAndAutoButtonDisabledAC = (incButtonDisabled: boolean, resetButtonDisabled: boolean, autoButtonDisabled: boolean): IncAndResetAndAutoButtonDisabledActionType => {
    return {type: 'INC-AND-RESET-AND-AUTO-BUTTON-DISABLED', incButtonDisabled, resetButtonDisabled, autoButtonDisabled}
}
export const EnterSetButtonTitleShowAC = (enterSetButton: boolean): EnterSetButtonTitleShowActionType => {
    return {type: 'ENTER-SET-BUTTON-TITLE-SHOW', enterSetButton}
}
export const ResetButtonDisabledAC = (resetButtonDisabled: boolean): ResetButtonDisabledActionType => {
    return {type: 'RESET-BUTTON-DISABLED', resetButtonDisabled}
}
export const ActiveButtonIncAC = (activeButtonInc: boolean): ActiveButtonIncActionType => {
    return {type: 'ACTIVE-BUTTON-INC', activeButtonInc}
}
export const SetTimerIdAC = (timerId: SetStateAction<any>): SetTimerIdActionType => {
    return {type: 'SET-TIMER-ID', timerId}
}
export const ToggleAutoButtonDisabledAC = (): ToggleAutoButtonDisabledActionType => {
    return {type: 'TOGGLE-AUTO-BUTTON-DISABLED'}
}
export const ResetAutoButtonDisabledAC = (): ResetAutoButtonDisabledActionType => {
    return {type: 'RESET-AUTO-BUTTON-DISABLED'}
}
export const IncButtonDisabledAC = (): IncButtonDisabledActionType => {
    return {type: 'INC-BUTTON-DISABLED'}
}


// thunks
export const toggleAutoModeCounterTC = () => (dispatch: Dispatch, getState: () => RootState) => {
    let {count, maxCount, autoButtonDisabled} = getState().counter
    autoButtonDisabled && dispatch(SetTimerIdAC(setTimeout(() => {
        if (count < maxCount ) {
            dispatch(IncCountAC(count));
        }
    }, 1000)))
}


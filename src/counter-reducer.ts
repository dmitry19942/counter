import {CounterStateType} from "./AppWithReducers";

export type IncCountActionType = {
    type: 'INC-COUNT',
    count: number
}

export type ChangeMaxCountActionType = {
    type: 'CHANGE-MAX-VALUE',
    maxCount: number
}

export type ChangeStartCountActionType = {
    type: 'CHANGE-START-VALUE',
    startCount: number
}

export type ResetCountActionType = {
    type: 'RESET-COUNT',
    count: number,
    resetButtonDisabled: boolean
}

export type SetButtonActionType = {
    type: 'SET-BUTTON',
    count: number,
    maxCount: number,
    buttonSetDisabled: boolean,
    enterSetButton: boolean,
    resetButtonDisabled: boolean
}

export type StartValueMaxValueIsCorrectActionType = {
    type: 'START-VALUE-MAX-VALUE-IS-CORRECT',
    errorMaxValue: boolean,
    errorStartValue: boolean,
    buttonSetDisabled: boolean,
    incorrectValue: boolean
}

export type MaxValueIsCorrectActionType = {
    type: 'MAX-VALUE-IS-CORRECT',
    errorMaxValue: boolean
}

export type IncAndResetButtonDisabledActionType = {
    type: 'INC-AND-RESET-BUTTON-DISABLED',
    incButtonDisabled: boolean,
    resetButtonDisabled: boolean
}

export type EnterSetButtonTitleShowActionType = {
    type: 'ENTER-SET-BUTTON-TITLE-SHOW',
    enterSetButton: boolean
}

export type ResetButtonDisabledActionType = {
    type: 'RESET-BUTTON-DISABLED',
    resetButtonDisabled: boolean
}

type ActionsType = IncCountActionType | ChangeMaxCountActionType | ChangeStartCountActionType | ResetCountActionType | SetButtonActionType | StartValueMaxValueIsCorrectActionType | MaxValueIsCorrectActionType | IncAndResetButtonDisabledActionType | EnterSetButtonTitleShowActionType | ResetButtonDisabledActionType

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
    resetButtonDisabled: false
}

export const counterReducer = (state: CounterStateType = initialState, action: ActionsType): CounterStateType => {
    switch (action.type) {
        case 'INC-COUNT': {
            return {...state, count: action.count + 1}
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
            return {...state, incButtonDisabled: action.incButtonDisabled, resetButtonDisabled: action.resetButtonDisabled }
        }
        case 'ENTER-SET-BUTTON-TITLE-SHOW': {
            return {...state, enterSetButton: action.enterSetButton}
        }
        case 'RESET-BUTTON-DISABLED': {
            return {...state, resetButtonDisabled: action.resetButtonDisabled }
        }
        default:
            return state
    }
}

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
export const EnterSetButtonTitleShowAC = (enterSetButton: boolean): EnterSetButtonTitleShowActionType => {
    return {type: 'ENTER-SET-BUTTON-TITLE-SHOW', enterSetButton}
}
export const ResetButtonDisabledAC = (resetButtonDisabled: boolean): ResetButtonDisabledActionType => {
    return {type: 'RESET-BUTTON-DISABLED', resetButtonDisabled}
}

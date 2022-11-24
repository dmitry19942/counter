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

type ActionsType = IncCountActionType | ChangeMaxCountActionType | ChangeStartCountActionType | ResetCountActionType | SetButtonActionType


export const counterReducer = (state: CounterStateType, action: ActionsType): CounterStateType => {
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

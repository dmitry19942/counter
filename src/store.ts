import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import {loadState, saveState} from "./localStorage";


const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = createStore(rootReducer, loadState())

store.subscribe(() => {
    saveState({
      counter: store.getState().counter
    })
})

export type RootState = ReturnType<typeof store.getState>

// @ts-ignore
window.store = store
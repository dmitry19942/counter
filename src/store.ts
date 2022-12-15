import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {counterReducer} from "./counter-reducer";
import {loadState, saveState} from "./localStorage";


const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = createStore(rootReducer, loadState(), applyMiddleware(thunk))

store.subscribe(() => {
    saveState({
      counter: store.getState().counter
    })
})

export type RootState = ReturnType<typeof store.getState>

// @ts-ignore
window.store = store
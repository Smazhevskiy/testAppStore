import thunk, {ThunkAction} from 'redux-thunk'
import {deviceReducer} from './device-reducer'
import {applyMiddleware, combineReducers, createStore} from 'redux'

const rootReducer = combineReducers({
    device: deviceReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export type ThunkType<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, any>

// @ts-ignore
window.store = store
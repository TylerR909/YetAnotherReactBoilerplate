import { Action as ReduxAction, combineReducers, createStore } from 'redux'

/**
 * Reducers
 */
import incrementors from './increment'

const rootReducer = combineReducers({ increments: incrementors })

export default createStore(rootReducer)

/**
 * Default actions for this project have a 'payload' property
 * which we can expect to have any required data
 */
export type Action = ReduxAction & {
  payload?: any
}

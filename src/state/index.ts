import {
  Action as ReduxAction,
  combineReducers,
  compose,
  createStore,
  applyMiddleware,
} from 'redux'
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'

/**
 * Reducers
 */
import incrementors from './increment'
const rootReducer = combineReducers({ increments: incrementors })

/**
 * Connected React Router
 */
export const history = createBrowserHistory()

export default createStore(
  connectRouter(history)(rootReducer),
  compose(applyMiddleware(routerMiddleware(history))),
)

/**
 * Default actions for this project have a 'payload' property
 * which we can expect to have any required data
 */
export type Action = ReduxAction & {
  payload?: any
}

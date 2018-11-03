import {
  Action as ReduxAction,
  combineReducers,
  compose,
  createStore,
  applyMiddleware,
} from 'redux'
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'

/**
 * Reducers
 */
import incrementors from './increment'
const rootReducer = combineReducers({ increments: incrementors })

/**
 * Connected React Router
 */
export const history = createBrowserHistory()

/**
 * Redux Dev Tools browser extension - Dev Only
 */
// @ts-ignore - "Does not exist on type window"
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(
  connectRouter(history)(rootReducer),
  composeEnhancers(applyMiddleware(routerMiddleware(history), thunk)),
)

/**
 * Default actions for this project have a 'payload' property
 * which we can expect to have any required data
 */
export type Action = ReduxAction & {
  payload?: any
}

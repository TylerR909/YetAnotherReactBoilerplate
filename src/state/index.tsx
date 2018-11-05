import React from 'react'
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
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'

/**
 * Reducers
 */
import incrementors from 'state/increment'
const rootReducer = combineReducers({ increments: incrementors })

/**
 * Connected React Router
 */
const history = createBrowserHistory()

/**
 * Redux Dev Tools browser extension - Dev Only
 */
// @ts-ignore - "Does not exist on type window"
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  connectRouter(history)(rootReducer),
  composeEnhancers(applyMiddleware(routerMiddleware(history), thunk)),
)

const ReduxWrapper = ({ children }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>{children}</ConnectedRouter>
  </Provider>
)

export default ReduxWrapper

/**
 * Default actions for this project have a 'payload' property
 * which we can expect to have any required data
 */
export type Action = ReduxAction & {
  payload?: any
}

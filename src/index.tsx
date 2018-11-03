import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router'
import App from 'components/App'
import store, { history } from 'state'

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Switch>
          <Route exact path="/app" component={App} />
          <Route render={() => <div>default route</div>} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
)

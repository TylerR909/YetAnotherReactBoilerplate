import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router'
import MuiTheme from './theme/muiTheme'
import App from 'components/App'
import store, { history } from 'state'

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MuiTheme>
        <div>
          <Switch>
            <Route exact path="/app" component={App} />
            <Route render={() => <div>default route</div>} />
          </Switch>
        </div>
      </MuiTheme>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
)

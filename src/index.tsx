import React from 'react'
import ReactDOM from 'react-dom'
import MuiTheme from './theme/muiTheme'
import App from 'components/App'
import ReduxWrapper from 'state'

ReactDOM.render(
  <ReduxWrapper>
    <MuiTheme>
      <App />
    </MuiTheme>
  </ReduxWrapper>,
  document.getElementById('root'),
)

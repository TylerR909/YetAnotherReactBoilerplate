import React from 'react'
import { hot } from 'react-hot-loader'
import styled, { keyframes } from 'react-emotion'
import Incrementor from './Incrementor'
import { Route, Switch } from 'react-router'

const Name = styled.div`
  font-size: 32px;
  font-family: sans-serif;
  text-transform: uppercase;
  color: green;
  opacity: 1;

  animation: ${keyframes`
    0% { opacity: 0 }
    100% { opacity: 1 }
  `} 1s;
`

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const subApp = () => (
      <>
        <Name>custom-boilerplate</Name>
        <Incrementor name="Boilerplate" />
      </>
    )
    return (
      <div>
        <Switch>
          <Route exact path="/app" render={() => <div>default route</div>} />
          <Route component={subApp} />
        </Switch>
      </div>
    )
  }
}

export default hot(module)(App)

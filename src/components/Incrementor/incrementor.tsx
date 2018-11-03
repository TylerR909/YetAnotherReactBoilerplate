import React from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import { increment, decrement } from 'state/increment'
import styled from 'react-emotion'

const CounterContainer = styled.span`
  margin: 0 16px;
`

interface Props {
  counter?: number
  increment?: typeof increment
  decrement?: typeof decrement
}

@connect(
  ({ increments: { counter } }) => ({ counter }),
  { increment, decrement },
)
class Incrementor extends React.PureComponent<Props> {
  constructor(props) {
    super(props)
  }

  static defaultProps = {
    counter: 0,
    increment() {},
    decrement() {},
  }

  render() {
    const { counter, increment, decrement } = this.props

    return (
      <div style={{ flexDirection: 'row' }}>
        <Button variant="contained" color="primary" onClick={() => decrement()}>
          Decrement
        </Button>
        <CounterContainer>{counter}</CounterContainer>
        <Button variant="contained" color="primary" onClick={() => increment()}>
          Increment
        </Button>
      </div>
    )
  }
}

export default Incrementor

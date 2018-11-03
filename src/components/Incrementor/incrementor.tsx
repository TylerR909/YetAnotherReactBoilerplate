import React from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import { increment, decrement } from 'state/increment'
import styled from 'react-emotion'

const CounterContainer = styled.span`
  margin: 0 16px;
`

export interface OwnProps {
  name?: string
}

interface StateProps {
  counter: number
}

interface DispatchProps {
  increment: typeof increment
  decrement: typeof decrement
}

type Props = OwnProps & StateProps & DispatchProps

@connect<StateProps, DispatchProps, OwnProps>(
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
    const { counter, increment, decrement, name } = this.props

    return (
      <div style={{ flexDirection: 'row' }}>
        <Button variant="contained" color="primary" onClick={() => decrement()}>
          Decrement
        </Button>
        <CounterContainer>
          {name && `${name}: `}
          {counter}
        </CounterContainer>
        <Button variant="contained" color="primary" onClick={() => increment()}>
          Increment
        </Button>
      </div>
    )
  }
}

export default Incrementor

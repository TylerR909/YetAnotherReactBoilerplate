import { Action } from '.'

/**
 * Actions
 */
export const INCREMENT = 'increment'
export const DECREMENT = 'decrement'

const initialState = {
  counter: 0,
}

/**
 * Reduer
 */
export default function reducer(state = initialState, { type, payload }: Action) {
  switch (type) {
    case INCREMENT:
      return { ...state, counter: state.counter + (payload || 1) }
    case DECREMENT:
      return { ...state, counter: state.counter - (payload || 1) }
    default:
      return state
  }
}

/**
 * Action Creators
 */
export const increment = (amount?: number): Action => ({
  type: INCREMENT,
  payload: amount || 0,
})

export const decrement = (amount?: number) => (dispatch, getState) => {
  const {
    increments: { counter: initialCount },
  } = getState()

  /**
   * Redux-Thunk Demo. Only decrement after 2
   * seconds if no increments were made
   */
  return setTimeout(() => {
    const {
      increments: { counter: currentCount },
    } = getState()

    initialCount >= currentCount &&
      dispatch({
        type: DECREMENT,
        payload: amount || 0,
      })
  }, 2000)
}

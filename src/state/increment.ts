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

export const decrement = (amount?: number): Action => ({
  type: DECREMENT,
  payload: amount || 0,
})

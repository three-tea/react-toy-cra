import { keyMirror } from '../utils/utils'
import { fromJS } from 'immutable'
import { createReducer } from 'redux-immutablejs'

const Test = keyMirror({
  CHANGE_STATE_BY_KEY: null,
})

// initialState
const initialState = fromJS({
  name: '',
})

// Reducer
export default createReducer(initialState, {
  [Test.CHANGE_STATE_BY_KEY]: (state, { key, value }) => state.set(key, value),
})

// Action
export const changeStateByKey = (key, value) => ({
  type: Test.CHANGE_STATE_BY_KEY,
  key,
  value,
})

// Middleware
export function test() {
  return (dispatch, getState) => {
    // console.log(getState().toJS())
  }
}

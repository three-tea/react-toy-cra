// Action type
import { keyMirror } from '../utils/utils'
import { fromJS } from 'immutable'
import { createReducer } from 'redux-immutablejs'

const ListItemControl3 = keyMirror({
  SET_LIST_ITEM: null,
})

// InitialState
const initialState = fromJS({
  listItems: [],
})

// Reducer
export default createReducer(initialState, {
  [ListItemControl3.SET_LIST_ITEM]: null,
})

// Action creator
export const setListItem = () => ({
  type: [ListItemControl3.SET_LIST_ITEM],
})

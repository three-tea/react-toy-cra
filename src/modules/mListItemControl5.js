// Action type
import { keyMirror } from '../utils/utils'
import { fromJS, Map } from 'immutable'
import { createReducer } from 'redux-immutablejs'

const ListItemControl5 = keyMirror({
  ADD_LIST_ITEM: null,
})

// InitialState
const initialState = fromJS({
  listItems: [],
})

// Reducer
export default createReducer(initialState, {
  [ListItemControl5.ADD_LIST_ITEM]: (state, { data }) =>
    state.update('listItems', listItems => listItems.push(Map(data || {}))),
})

// Action creator
export const setListItem = data => ({
  type: ListItemControl5.ADD_LIST_ITEM,
  data,
})

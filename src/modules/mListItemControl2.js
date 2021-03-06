// Action Type
import { keyMirror } from '../utils/utils'
import { fromJS, Map } from 'immutable'
import { createReducer } from 'redux-immutablejs'

// Action type
const ListItemControl2 = keyMirror({
  ADD_LIST_ITEM: null,
  REMOVE_LIST_ITEM: null,
  UPDATE_LIST_ITEM_BY_INDEX: null,
})

// InitialState
const initialState = fromJS({
  listItems: [],
})

// Reducer
export default createReducer(initialState, {
  [ListItemControl2.ADD_LIST_ITEM]: (state, { data }) =>
    state.update('listItems', listItems => listItems.push(Map(data || {}))),
})

// Action creator
export const addListItem = data => ({
  type: [ListItemControl2.ADD_LIST_ITEM],
  data,
})

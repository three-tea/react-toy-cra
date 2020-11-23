import { keyMirror } from '../utils/utils'
import { fromJS, Map } from 'immutable'
import { createReducer } from 'redux-immutablejs'

// Action Type
const ListItemControl = keyMirror({
  SET_LIST_ITEM: null,
  REMOVE_LIST_ITEM: null,
  UPDATE_LIST_ITEM_BY_INDEX: null,
})

// InitialState
const initialState = fromJS({
  contentsList: [],
})

// Reducer
export default createReducer(initialState, {
  // TODO: 파라미터로 요소 아이템을 받기
  [ListItemControl.SET_LIST_ITEM]: (state, { data }) => {
    return state.update('contentsList', contentsList => contentsList.unshift(Map(data || {})))
  },

  // TODO: 아이템 요소 삭제하기
  [ListItemControl.REMOVE_LIST_ITEM]: (state, { index }) => {
    return state.update('contentsList', contentsList => contentsList.delete(index))
  },

  // TODO: 인덱스 받아서 아이템 요소 업데이트
  [ListItemControl.UPDATE_LIST_ITEM_BY_INDEX]: (state, { index, data }) => {
    return state.update('contentsList', contentsList => contentsList.set(index, Map(data || {})))
  },
})

// Action
export const setContentsItem = data => ({
  type: ListItemControl.SET_LIST_ITEM,
  data,
})

export const removeContentsItem = index => ({
  type: ListItemControl.REMOVE_LIST_ITEM,
  index,
})

export const updateContentsItem = (index, data) => ({
  type: ListItemControl.UPDATE_LIST_ITEM_BY_INDEX,
  index,
  data,
})

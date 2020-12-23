import { keyMirror } from '../utils/utils'
import { fromJS, Map } from 'immutable'
import { createReducer } from 'redux-immutablejs'
import axios from 'axios'

// Action Type
const List = keyMirror({
  SAVE_CONTENTS: null,
  DELETE_ITEM: null,
  SAVE_ERROR: null,
})

// InitialState
const initialState = fromJS({
  listItems: [],
  error: {},
})

// Reducer
export default createReducer(initialState, {
  [List.SAVE_CONTENTS]: (state, { listItems }) => {
    return state.set('listItems', fromJS(listItems))
  },
  [List.DELETE_ITEM]: (state, { index }) => {
    return state.update('listItems', value => value.delete(index))
    // return state.set('listItems', state.get('listItems').delete(index));
  },
  [List.SAVE_ERROR]: (state, { error }) => {
    return state.set('error', error)
  },
})

// Action
export const saveContents = listItems => {
  return {
    type: List.SAVE_CONTENTS,
    listItems,
  }
}

export const deleteItem = index => {
  return {
    type: List.DELETE_ITEM,
    index,
  }
}

const saveError = error => {
  return {
    type: List.SAVE_ERROR,
    error: Map(error),
  }
}

const getQueryData = (query = 'react') => {
  return axios.get(`https://hn.algolia.com/api/v1/search?query=${query}`)
}

// Middleware
export const getList = () => {
  return dispatch => {
    try {
      Promise.all([getQueryData('react'), getQueryData('redux')]).then(
        ([result1, result2]) => {
          // dispatch(saveContents(result1.data.page))
          dispatch(saveContents(result2.data.hits))
        }
      )
    } catch (e) {
      const { errorCode, message } = e.response.data
      // validation에 대한 Map()을 저장하고 component에서 수신
      dispatch(saveError({ errorCode, message }))
    }
  }
}

// import { keyMirror } from '../utils/utils';
// import { fromJS } from 'immutable';
// import { createReducer } from 'redux-immutablejs';
//
// // Action Type
// const List = keyMirror({
//   SAVE_CONTENTS: null,
//   DELETE_ITEM: null,
// });
//
// // InitialState
// const initialState = fromJS({
//   listItems: [],
// });
//
// // Reducer
// export default createReducer(initialState, {
//   [List.SAVE_CONTENTS]: (state, { listItems }) => state.set('listItems', fromJS(listItems)),
//   [List.DELETE_ITEM]: (state, { index }) => state.update('listItems', (value) => value.delete(index)),
//   // [List.DELETE_ITEM]: (state, { index }) => state.set('listItems', state.get('listItems').delete(index)),
// });
//
// // Action
// export const saveContents = (listItems) => {
//   return {
//     type: List.SAVE_CONTENTS,
//     listItems,
//   };
// };
//
// export const deleteItem = (index) => {
//   return {
//     type: List.DELETE_ITEM,
//     index,
//   };
// };

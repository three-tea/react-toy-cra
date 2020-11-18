import { keyMirror } from '../utils/utils';
import { fromJS } from 'immutable';
import { createReducer } from 'redux-immutablejs';

// Action Type
const List = keyMirror({
  SAVE_CONTENTS: null,
  DELETE_ITEM: null,
});

// InitialState
const initialState = fromJS({
  listItems: [],
});

// Reducer
export default createReducer(initialState, {
  [List.SAVE_CONTENTS]: (state, { listItems }) => {
    return state.set('listItems', fromJS(listItems));
  },
  [List.DELETE_ITEM]: (state, { index }) => {
    return state.update('listItems', (value) => value.delete(index));
    // return state.set('listItems', state.get('listItems').delete(index));
  },
});

// Action
export const saveContents = (listItems) => {
  return {
    type: List.SAVE_CONTENTS,
    listItems,
  };
};

export const deleteItem = (index) => {
  return {
    type: List.DELETE_ITEM,
    index,
  };
};

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

import { combineReducers } from 'redux-immutablejs'
import { connectRouter } from 'connected-react-router/immutable'
import test from './mTest'
import list from './mList'
import listItemControl from './mListItemControl'

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    test,
    list,
    listItemControl,
  })

export default rootReducer

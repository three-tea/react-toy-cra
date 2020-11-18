import { combineReducers } from 'redux-immutablejs';
import { connectRouter } from 'connected-react-router/immutable';
import test from './mTest';
import list from './mList';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  test,
  list,
});

export default rootReducer;
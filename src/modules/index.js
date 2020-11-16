import { combineReducers } from 'redux-immutablejs';
import { connectRouter } from 'connected-react-router/immutable';
import test from './mTest';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  test,
});

export default rootReducer;
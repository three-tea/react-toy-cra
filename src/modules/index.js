import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import test from './mTest';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  test,
});

export default rootReducer;
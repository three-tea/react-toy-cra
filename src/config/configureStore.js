import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router";
import api from "../modules-api/index";
import rootReducer from "../modules";
import { composeWithDevTools } from "redux-devtools-extension/index";

export default function configureStore(initialState, history) {
  const middleware = applyMiddleware(
    routerMiddleware(history),
    thunk.withExtraArgument(api),
    store => next => action => next(action),
  )
  return createStore(
    rootReducer(history),
    initialState,
    composeWithDevTools(middleware)
  )
}

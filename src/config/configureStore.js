import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router'
import api from '../modules-api/index'
import rootReducer from '../modules'
import { composeWithDevTools } from 'redux-devtools-extension/index'

export default function configureStore(initialState, history) {
  const sagaMiddleware = createSagaMiddleware()
  const middleware = applyMiddleware(
    routerMiddleware(history),
    thunk.withExtraArgument(api),
    store => next => action => next(action),
    // sagaMiddleware
  )
  // sagaMiddleware.run(rootReducer)
  return createStore(
    rootReducer(history),
    initialState,
    composeWithDevTools(middleware)
  )
}

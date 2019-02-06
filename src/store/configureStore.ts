import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from './reducers'
import logger from '../middleware/logger'
import analytics from '../middleware/analytics'
import api from '../middleware/api'
import rootSaga from '../sagas'

const sagaMiddleware = createSagaMiddleware()

const configureStore = (preloadedState?: any): any => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(
      applyMiddleware(api, thunk, sagaMiddleware, logger, analytics, )
    )
  )
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default
      store.replaceReducer(nextReducer)
    })
  }
  sagaMiddleware.run(rootSaga)

  return store
}

export default configureStore

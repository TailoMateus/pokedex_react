import { createStore, applyMiddleware, Store } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware, { Task } from 'redux-saga'
import { MakeStore, createWrapper } from 'next-redux-wrapper'
import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

export interface SagaStore extends Store {
  sagaTask: Task;
}

const makeStore: MakeStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));

  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga)

  return store
}

export const wrapper = createWrapper(makeStore)


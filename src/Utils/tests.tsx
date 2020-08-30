import React, { FC } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, Store } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../Repositories/rootReducer'
import rootSaga from '../Repositories/rootSaga'

export const renderWrapper = (Component: FC) => {
  const sagaMiddleware = createSagaMiddleware()
  const store: Store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
  sagaMiddleware.run(rootSaga)

  return <Provider store={store}><Component /></Provider>
}
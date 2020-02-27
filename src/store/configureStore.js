import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {all, call} from "redux-saga/effects";
import thunk from 'redux-thunk';
import reducers from './rootreducer';
import usersSaga from "../components/home/sagas";
import cartSaga from "../components/cart/sagas"

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([call(usersSaga), call(cartSaga)])
}

export function configureStore(initialState) {
  const middleware = [thunk, sagaMiddleware];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(...middleware)));

  sagaMiddleware.run(rootSaga);

  return store;
}

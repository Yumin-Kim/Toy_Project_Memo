import RootReducer from "@reducers/root";
import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import RootSaga from "@sagas/root";

const sagaMiddleWare = createSagaMiddleware();

const configure = () => {
  let store;
  const middlewares = [sagaMiddleWare];
  if (process.env.NODE_ENV !== "production") {
    store = createStore(
      RootReducer,
      composeWithDevTools(applyMiddleware(...middlewares))
    );
  } else {
  }
  store = createStore(RootReducer, applyMiddleware(...middlewares));
  sagaMiddleWare.run(RootSaga);
  return store;
};

export default configure;

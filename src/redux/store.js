import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { RootReducer } from "./rootReducer";

export const store = createStore(
  RootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

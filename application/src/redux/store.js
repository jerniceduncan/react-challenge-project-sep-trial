import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from "redux-thunk";
import reducers from "./reducers";

const store = createStore(
  reducers, (applyMiddleware(ReduxThunk))
);

export default store;

import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import logs from "./user";
import user from "./user";

const reducer = combineReducers({
  logs,
  user,
});
// what is line 13-14?
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from "./user"; // What is this line?

//COPIED FROM GRACE SHOPPER
//  edited combine reducers to logs and user

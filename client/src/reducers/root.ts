import { combineReducers } from "redux";
import postReducer from "./post";

const RootReducer = combineReducers({
  post: postReducer,
});

export type ROOTSTATE = ReturnType<typeof RootReducer>;
export default RootReducer;

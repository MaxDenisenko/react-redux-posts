import { combineReducers } from "redux";
import { postsReducer } from "./postsReducer";
import { AppReducer } from "./appReducer";
import { userReducer } from "./userReducer";

export const RootReducer = combineReducers({
  posts: postsReducer,
  app: AppReducer,
  users: userReducer,
});

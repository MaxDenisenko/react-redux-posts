import { combineReducers } from "redux";
import { postsReducer } from "./postsReducer";
import { AppReducer } from "./appReducer";

export const RootReducer = combineReducers({
  posts: postsReducer,
  app: AppReducer,
});

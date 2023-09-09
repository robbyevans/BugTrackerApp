import { combineReducers } from "@reduxjs/toolkit";
import bugsReducer from "./BugsSlice";

export default combineReducers({
  bugs: bugsReducer,
});

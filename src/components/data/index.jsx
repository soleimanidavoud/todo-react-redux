import { combineReducers } from "@reduxjs/toolkit";
import DataSlice from "./DataSlice";

const rootReducer = combineReducers({
  data: DataSlice,
});

export default rootReducer;

import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers";
import searchReducer from "../reducers/searchReducer";

const rootReducer = combineReducers({
  // reducer
  reducer: mainReducer,
  search: searchReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

import { combineReducers } from "redux";

import searchResult from "../slices/searchResultSlice";

const appReducer = combineReducers({
  searchResult,
});

export default appReducer;

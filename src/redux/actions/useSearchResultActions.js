import { useDispatch } from "react-redux";

import {
  addSearchResults,
  clearSearchResults,
} from "../slices/searchResultSlice";

const useSearchResultActions = () => {
  const dispatch = useDispatch();

  const addSearchResultsDispatch = (data) => {
    dispatch(addSearchResults(data));
  };

  const clearSearchResultsDispatch = () => {
    dispatch(clearSearchResults());
  };

  return {
    addSearchResultsDispatch,
    clearSearchResultsDispatch,
  };
};

export { useSearchResultActions };

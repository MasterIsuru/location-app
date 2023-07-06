import { createSlice } from "@reduxjs/toolkit";

const initial = {
  locations: [],
};

export const searchResultSlice = createSlice({
  name: "searchResult",
  initialState: initial,
  reducers: {
    addSearchResults: (state, action) => {
      state.locations.push(action.payload);
    },
    clearSearchResults: (state) => {
      state.locations = [];
    },
  },
});

export const { addSearchResults, clearSearchResults } =
  searchResultSlice.actions;

export default searchResultSlice.reducer;

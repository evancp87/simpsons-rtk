import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchInput: "",
  sortInput: "",
};

export const controlsSlice = createSlice({
  name: "controls",
  initialState,
  reducers: {
    search: (state, action) => {
      state.searchInput = action.payload;
    },
    sort: (state, action) => {
      state.sortInput = action.payload;
    },
    reset: () => {
      return { ...initialState };
    },
  },
});

export const { search, sort, reset } = controlsSlice.actions;

export const selectSearch = (state) => state.controls.searchInput;
export const selectSort = (state) => state.controls.sortInput;

export default controlsSlice.reducer;

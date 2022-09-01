import { createSlice } from "@reduxjs/toolkit";

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    currentPage: 1,
    lastPage: 1,
    pages: [],
    types: []
  },
  reducers: {
    setCurrentPage: (state, action) => {state.currentPage = action.payload},
    setLastPage: (state, action) => {state.lastPage = action.payload},
    setPages: (state, action) => {state.pages = action.payload},
    setTypes: (state, action) => {state.types = action.payload}
  }
});

export const { setCurrentPage, setLastPage, setPages, setTypes } = dashboardSlice.actions;
export default dashboardSlice.reducer;

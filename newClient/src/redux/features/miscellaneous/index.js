import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeNav: window.location.pathname,
};

const miscellaneousSlice = createSlice({
  name: "miscellaneous",
  initialState: initialState,
  reducers: {
    setActiveNav(state, action) {
      state.activeNav = action.payload;
    },
  },
});

export const { setActiveNav } = miscellaneousSlice.actions;

export default miscellaneousSlice.reducer;

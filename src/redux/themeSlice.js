// light and dark mode theme state slice

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    changeTheme(state, action) {
      state.value = action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;

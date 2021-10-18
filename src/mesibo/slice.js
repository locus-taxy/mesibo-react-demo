import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMesiboInitialized: false,
};

export const mesiboSlice = createSlice({
  name: "mesibo",
  initialState,
  reducers: {
    initializeMesibo: (state) => {
      state.isMesiboInitialized = true;
    },
  },
});

export const { initializeMesibo } = mesiboSlice.actions;

export default mesiboSlice.reducer;

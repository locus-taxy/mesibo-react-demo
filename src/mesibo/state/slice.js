import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMesiboInitialized: false,
  latestTimeStamp: new Date().getTime(),
};

export const mesiboSlice = createSlice({
  name: "mesibo",
  initialState,
  reducers: {
    initializeMesibo: (state) => {
      state.isMesiboInitialized = true;
    },
    updateTimeStamp: (state) => {
      state.latestTimeStamp = new Date().getTime();
    },
  },
});

export const { initializeMesibo, updateTimeStamp } = mesiboSlice.actions;

export default mesiboSlice.reducer;

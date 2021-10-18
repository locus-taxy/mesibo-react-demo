import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMesiboInitialized: false,
  latestTimeStamp: new Date().getTime(),
  selectedConversation: null,
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
    selectConversation: (state, action) => {
      state.selectedConversation = action.payload;
    },
  },
});

export const { initializeMesibo, updateTimeStamp, selectConversation } =
  mesiboSlice.actions;

export default mesiboSlice.reducer;

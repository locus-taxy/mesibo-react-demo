import { configureStore } from "@reduxjs/toolkit";
import mesiboReducer from "./mesibo/slice";

export const store = configureStore({
  reducer: {
    mesibo: mesiboReducer,
  },
});

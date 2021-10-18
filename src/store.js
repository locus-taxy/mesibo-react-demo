import { configureStore } from "@reduxjs/toolkit";
import mesiboReducer from "./mesibo/state/slice";

export const store = configureStore({
  reducer: {
    mesibo: mesiboReducer,
  },
});

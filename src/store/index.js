import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "../store/UiSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
  },
});

export default store;

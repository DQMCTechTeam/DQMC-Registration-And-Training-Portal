import { createSlice } from "@reduxjs/toolkit";
// import { React } from "react-dom/test-utils";
const initialState = {
  showCart: false,
};

export const uiSlice = createSlice({
  name: "ui",
  notification: null,
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.showCart = !state.showCart;
    },
    displayCart: (state) => {
      state.showCart = true;
    },
    hideCart: (state) => {
      state.showCart = false;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});
export const selectUiStatus = (state) => state.ui.showCart;
export const selectNotification = (state) => state.ui.notification;
export const uiActions = uiSlice.actions;
export default uiSlice.reducer;

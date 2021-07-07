import { createSlice } from "@reduxjs/toolkit";

const UIInitialState = {
  showCart: false,
  notification: null,
};

const UISlice = createSlice({
  name: "ui",
  initialState: UIInitialState,
  reducers: {
    toggle(state) {
      state.showCart = !state.showCart;
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

export const UIActions = UISlice.actions;

export default UISlice;

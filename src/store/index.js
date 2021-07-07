import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import UISlice from "./ui-slice";

const store = configureStore({
  reducer: {
    UI: UISlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;

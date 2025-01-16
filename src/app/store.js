import { configureStore } from "@reduxjs/toolkit";
import slideReducer from "../slices/sliderSlice";
import productsReducer from "../slices/productsSlice";
import cartReducer from "../slices/cartSlice";
import authReducer from "../slices/authSlice";

export const store = configureStore({
  reducer: {
    slider: slideReducer,
    products: productsReducer,
    cart: cartReducer,
    user: authReducer,
  },
});

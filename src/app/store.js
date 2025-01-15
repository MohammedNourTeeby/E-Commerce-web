import { configureStore } from "@reduxjs/toolkit";
import slideReducer from "../slices/sliderSlice";
import productReducer from "../slices/productsSlice";

export const store = configureStore({
  reducer: {
    slider: slideReducer,
    products: productReducer,
  },
});
export default store;

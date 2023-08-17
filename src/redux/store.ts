import { configureStore } from "@reduxjs/toolkit";
import shoppingCartSlice from "./slices/shoppingCartSlice";
import productSelectSlice from "./slices/productSelectSlice";

export const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartSlice,
    productSelect: productSelectSlice,
  },
  devTools: true,
});

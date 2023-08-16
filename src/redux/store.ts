import { configureStore } from "@reduxjs/toolkit";
import shoppingCartSlice from "./slices/shoppingCartSlice";

export const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartSlice,
  },
  devTools: true,
});

import { IProductSelectData } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface IProductSelect {
  isOpen: boolean;
  data: IProductSelectData;
}

export const productSelectSlice = createSlice({
  name: "productSelect",
  initialState: {
    isOpen: false,
    data: {
      id: "",
      name: "",
      image: {
        src: "",
        alt: "",
      },
      options: [],
      action: "",
    },
  },
  reducers: {
    open: (state: IProductSelect, action) => {
      state.isOpen = true;
      state.data = action.payload;
    },
    close: (state: IProductSelect) => {
      state.isOpen = false;
    },
  },
});

export const selectProductSelect = (state: { productSelect: IProductSelect }) =>
  state.productSelect;
export const { open, close } = productSelectSlice.actions;
export default productSelectSlice.reducer;

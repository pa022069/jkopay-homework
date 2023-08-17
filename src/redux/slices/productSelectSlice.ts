import { ImageInfo, ProductPriceItemSize } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface IProductSelect {
  isOpen: boolean;
  data?: {
    id: string;
    name: string;
    image: ImageInfo;
    options: ProductPriceItemSize[];
    action: string;
  };
}

export const productSelectSlice = createSlice({
  name: "productSelect",
  initialState: {
    isOpen: false,
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

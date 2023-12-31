import { createSlice } from "@reduxjs/toolkit";

interface IShoppingCartItems {
  id: string;
  name: string;
  price: number;
  qty: number;
}

const getStateFromStorage = () => {
  const state = localStorage.getItem("shoppingCart");
  if (state) {
    return JSON.parse(state);
  }
  return [];
};

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: getStateFromStorage(),
  reducers: {
    addItem: (state: IShoppingCartItems[], action) => {
      const item = state.find(
        (item: IShoppingCartItems) => item.id === action.payload.id
      );
      if (item) {
        item.qty = item.qty + action.payload.qty;
      } else {
        state.push({ ...action.payload, qty: 1 });
      }
      return state;
    },
    clearList: () => {
      return [];
    },
  },
});

export const selectItems = (state: { shoppingCart: IShoppingCartItems[] }) =>
  state.shoppingCart;
export const { addItem, clearList } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;

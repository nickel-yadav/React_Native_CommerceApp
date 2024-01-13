import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      state.cartItems = [...state.cartItems, newItem];
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;

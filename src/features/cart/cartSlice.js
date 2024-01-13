import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.itemQuantity += 1;
      } else {
        state.cartItems = [...state.cartItems, { ...newItem, itemQuantity: 1 }];
      }
    },
    increaseQuantity: (state, action) => {
      const index = action.payload;
      state.cartItems[index].itemQuantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const index = action.payload;
      if (state.cartItems[index].itemQuantity > 0) {
        state.cartItems[index].itemQuantity -= 1;
      }
      if (state.cartItems[index].itemQuantity === 0) {
        state.cartItems.splice(index, 1);
      }
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;

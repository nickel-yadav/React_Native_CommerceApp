import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    productData: [],
  },
  reducers: {
    addToFavourites: (state) => {
      state.value += 1;
    },
    setProductData: (state, action) => {
      state.productData = action.payload;
    },
  },
});

export const { addToFavourites, setProductData } = productSlice.actions;
export default productSlice.reducer;

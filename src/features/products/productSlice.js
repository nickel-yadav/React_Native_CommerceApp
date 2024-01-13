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
      state.productData = action.payload.map((product) => ({
        ...product,
        isFavourited: false,
      }));
    },
    toggleFavourite: (state, action) => {
      const index = action.payload;
      const updatedProductData = [...state.productData];
      updatedProductData[index] = {
        ...updatedProductData[index],
        isFavourited: !updatedProductData[index].isFavourited,
      };

      state.productData = updatedProductData;
    },
  },
});

export const { addToFavourites, setProductData, toggleFavourite } =
  productSlice.actions;
export default productSlice.reducer;

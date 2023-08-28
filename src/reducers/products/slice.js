import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "sueter",
    price: "2000",
    image: "https://m.media-amazon.com/images/I/81qxLfFvXVL._AC_UL320_.jpg",
  },
  {
    id: 2,
    title: "sueter",
    price: "2000",
    image: "https://m.media-amazon.com/images/I/81qxLfFvXVL._AC_UL320_.jpg",
  },
];
export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    deleteProducts: (state, action) => {
      const id = action.payload;
      return state.filter((product) => product.id !== id);
    },
  },
});
export default productsSlice.reducer;
export const { deleteProducts } = productsSlice.actions;

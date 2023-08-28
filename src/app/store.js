import { configureStore } from "@reduxjs/toolkit";
import  productsSlice  from "../reducers/products/slice";
export const store = configureStore({
   reducer : {
    products : productsSlice
   }
});

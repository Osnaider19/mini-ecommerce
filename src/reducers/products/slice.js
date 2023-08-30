import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    { id: 1, name: "product 1", price: 100 },
    { id: 2, name: "product 2", price: 500 },
    { id: 3, name: "product 3", price: 300 },
    { id: 4, name: "product 4", price: 600 },
    { id: 5, name: "product 5", price: 200 },
    { id: 6, name: "product 6", price: 700 },
  ],
  cart: [],
};
export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addCart : (state , action)=>{
      let newitem = state.products.find(
        (product) => product.id === action.payload
      );
      let itemIncart = state.cart.find((item)=> item.id === newitem.id)

      return itemIncart ? {...state, cart : state.cart.map((item)=>item.id === newitem.id ? {...item, quantity:item.quantity + 1} : item), } : {
          ...state, 
          cart : [...state.cart , {...newitem , quantity:1}]
      }
    },
    removeOneFromCart : (state , action)=>{
      let itemToDelete = state.cart.find((item)=>item.id === action.payload);
        return itemToDelete.quantity > 1 ? {
            ...state,
            cart:state.cart.map((item)=> item.id === action.payload ? {...item, quantity:item.quantity - 1} : item)
        } : {
            ...state, 
            cart:state.cart.filter((item)=>item.id === action.payload),
        }
    },
    removeAllFromCart : (state , action)=>{
      return {
        ...state, 
        cart:state.cart.filter((item)=>item.id !== action.payload)
      }
    },
    clearCart : (state) => {
      return initialState
    }

  },
});
export default productsSlice.reducer;
export const {  removeAllFromCart , removeOneFromCart , clearCart  , addCart } = productsSlice.actions;

import React from "react";
import { ProductItem } from "./ProductItem";
import { useDispatch , useSelector } from "react-redux";
import { CardItem } from "./CardItem";
import { addCart , clearCart , removeAllFromCart , removeOneFromCart} from "../reducers/products/slice";
export const Shopping = () => {
  const state = useSelector((state) => state);
  const { products, cart } = state.products;
  const dispatch = useDispatch();
  return (
    <div>
      <h3 className="text-center py-3 text-5xl">Productos</h3>
      <div className="flex  gap-3">
        {products?.map((product) => (
          <ProductItem
            key={product.id}
            data={product}
            addToCard={() => {
              dispatch(addCart(product.id));
            }}
          />
        ))}
      </div>

      <div>
        <h2>Carrito</h2>
        <article>
          {cart?.map((item, index) => (
            <CardItem
              key={index}
              data={item}
              delOneCard={() => {dispatch(removeAllFromCart(item.id))}}
              delAllCard={() => {dispatch(removeOneFromCart(item.id, true))}}
            />
          ))}
        </article>
        <section className="py-4">
          <button className="bg-red-500 px-3 py-1 rounded-lg" onClick={(e)=>{
            dispatch(clearCart())
            console.log(e)
          }}>Clear Cart</button>
        </section>
      </div>
    </div>
  );
};

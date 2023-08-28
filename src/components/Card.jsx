import { useDispatch, useSelector } from "react-redux";
import { deleteProducts } from "../reducers/products/slice";
export const Card = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Cart</h1>
      <h1>{products.length}</h1>
      <div className="flex flex-wrap justify-between gap-7 overflow-hidden m-auto items-center px-14 ">
        {console.log(products)}
        {products?.map((product) => (
          <div
            key={product.id}
            className="max-w-[170px] max-h-[365px] h-full border-collapse border w-full"
          >
            <div className="py-3">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full  object-cover"
              />
            </div>
            <h3>{product.title}</h3>
            <strong>{product.price}</strong>
            <button
              className="py-3 px-5 bg-red-600 rounded-lg"
              onClick={() => {
                dispatch(deleteProducts(product.id));
              }}
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

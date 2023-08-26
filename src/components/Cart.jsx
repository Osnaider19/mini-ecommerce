import React, { useEffect, useState } from "react";

export const Cart = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setData(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <div>
      <h1>Cart</h1>
      <div className="flex flex-wrap justify-between gap-7 overflow-hidden m-auto items-center px-14">
        {data?.map((product) => (
          <div key={product.id} className="max-w-[170px] border-collapse border w-full">
            <img
              src={product.image}
              alt={product.title}
              className=""
            />
            <h3>{product.title}</h3>
            <strong>{product.price}</strong>
          </div>
        ))}
      </div>
    </div>
  );
};

import React from "react";

export const CardItem = ({ data, delOneCard, delAllCard }) => {
  const { id, name, price, quantity } = data;
  return (
    <div>
      <h2>{name}</h2>
      <strong>
        ${price}.00 x {quantity} = ${price * quantity}.00
      </strong>
      <div className="flex gap-4">
        <button
          className="bg-red-500 px-3 py-1 rounded-lg"
          onClick={() => {
            delOneCard(id);
          }}
        >
          eliminar uno
        </button>
        <button
          className="bg-red-500 px-3 py-1 rounded-lg"
          onClick={() => {
            delAllCard(id, true);
            
          }}
        >
          eliminar todos
        </button>
      </div>
    </div>
  );
};

import React from 'react'

export const ProductItem = ({data , addToCard}) => {
  return (
    <div className='flex flex-col py-3 justify-between w-full mx-10 items-center border rounded-2xl border-[#00000030]'>
       <h2 className='px-4'>{data.name}</h2>
       <p>{data.price}00</p>
       <button className='bg-green-500 px-3 py-1 rounded-lg' onClick={()=>{addToCard(data.id)}}>añadir</button>
    </div>
  )
}

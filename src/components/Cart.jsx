import React, { useContext, useEffect } from 'react';
import { Cardcontext } from './Context';
import { motion as m } from 'framer-motion';

export default function Cart() {
  const { Card, setCard } = useContext(Cardcontext);

  const removeCart = (id) => {
    const newCard = Card.filter(item => item.id !== id);
    setCard(newCard);
  };


  return (
    <div className='relative flex flex-col justify-around items-center w-[100vw-10rem] overflow-x-hidden basis-[25%] capitalize pb-5'>
      <span className=' fixed top-0 flex justify-center text-center h-20 pt-5 font-semibold text-4xl bg-slate-100 w-full '>Cart section</span>
      <div className='flex gap-4 h-auto flex-wrap w-72 justify-center items-center mt-20 overflow-hidden'>
        {Card.map((item) => (
          <m.div key={item.id} className='text-center border-2 mt-3 w-72 p-10 h-auto' layout>
            <img className='h-56 w-56 flex rounded-md' src={item.img} alt="items" />
            <p>{item.name}</p>
            <p>Price: ${item.price}</p>
            <div className='flex justify-between my-5'>
              <button className=' px-4 py-3 bg-black text-white rounded-lg' >Buy now</button>
              <button className='px-4 py-3 bg-red-800 text-white rounded-lg' onClick={() => removeCart(item.id)}>Remove</button>
            </div>
          </m.div>
        ))}
      </div>
    </div>
  );
}

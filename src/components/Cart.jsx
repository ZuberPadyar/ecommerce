import React, { useContext } from 'react';
import { Cardcontext } from './Context';

export default function Cart() {
  const { Card, setCard } = useContext(Cardcontext);


  const removeCart = (id) => {
    const newCard = Card.filter(item => item.id !== id);
    setCard(newCard);
  };

  return (
    <div className='relative flex flex-col justify-around items-center w-[100vw-10rem] overflow-x-hidden basis-[25%] capitalize pb-5'>
      <span className='flex justify-center items-center my-10 font-semibold text-4xl'>Cart section</span>
      <div className='flex gap-4 h-auto flex-wrap w-72 justify-center items-center'>
        {Card.map((item) => (
          <div key={item.id} className='text-center m-5'>
            <img className='h-56 w-56 flex rounded-md' src={item.img} alt="items" />
            <p>{item.name}</p>
            <p>Price: ${item.price}</p>
            <div className='flex justify-between my-5'>
            <button className=' px-4 py-3 bg-black text-white rounded-lg' >Buy now</button>
            <button className='px-4 py-3 bg-red-800 text-white rounded-lg' onClick={() => removeCart(item.id)}>remove</button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

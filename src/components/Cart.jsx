import React, { useContext } from 'react';
import { Cardcontext } from './Context';

export default function Cart() {
  const { Card, setCard } = useContext(Cardcontext);

  return (
    <div className=' w-full'>
      {Card.map((item) => (
          <div key={item.id} className='flex'>
          <img className=' h-28 ' src={item.img} alt="" />
          <p>{item.name}</p>
          <p>Price: ${item.price}</p>
        </div>
      ))}
      <div className=' h-36 w-44 border-2 border-red-800  top-16 right-0'></div>
    </div>
  );
}

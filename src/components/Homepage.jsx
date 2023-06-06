// import React, { useState, createContext, useContext } from 'react';
// import { Cardcontext } from './Context';

// export default function Homepage({ index, image }) {
//   const { Card, setCard } = useContext(Cardcontext);

//   const addtocart = (e) => {
//     console.log(e);
//     setCard([...Card,Card]);
//   };

//   return (
//     <div key={image.id} className='pl-6 md:pl-18 h-auto w-full basis-[25%] capitalize my-7'>
//       <img src={image.img} alt={image.name} className='h-36 md:h-48 w-32 md:w-48 rounded-2xl' />
//       <h4 className='my-2'>{image.name}</h4>
//       <p className='my-1'>Price: ${image.price}</p>
//       <button className='bg-slate-600 w-32 md:w-48 rounded-xl h-10 text-white hover:bg-slate-800 capitalize' onClick={() => addtocart(image)}>add to cart</button>
//     </div>
//   );
// }

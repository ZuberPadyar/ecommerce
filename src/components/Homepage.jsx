import React from 'react';

export default function Homepage({ index, image }) {


    const addtocart =(e) => {
        console.log(e);
    }
  return (
    
    <div key={image.id} className='pl-16 h-auto w-full basis-[25%] capitalize mt-10'>
      <img src={image.img} alt={image.name} className='h-48 w-48 rounded-2xl' />
      <h4 className='my-2'>{image.name}</h4>
      <p className='my-1' >Price: ${image.price }</p>
      <button className='bg-slate-600 w-48 rounded-xl h-10 text-white' onClick={()=>addtocart(image)}>add to cart</button>
    </div>
  );
}

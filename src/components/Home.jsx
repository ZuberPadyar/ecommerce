import React, { useContext } from 'react';
import { Cardcontext } from './Context';

export default function Home() {
  const images = [
    {
      id: 1,
      img: 'https://static.pexels.com/photos/36753/flower-purple-lical-blosso.jpg',
      name: 'flower',
      price: '100',
    },
    {
      id: 2,
      img: 'https://static.pexels.com/photos/36753/flower-purple-lical-blosso.jpg',
      name: 'flower',
      price: '100',
    },
    {
      id: 3,
      img: 'https://static.pexels.com/photos/36753/flower-purple-lical-blosso.jpg',
      name: 'flower',
      price: '100',
    },
    // ... rest of the image objects
  ];

  const { Card, setCard } = useContext(Cardcontext);

  const addtocart = (image) => {
    console.log(image);
    const newCart = [...Card, image];
    setCard(newCart);
  };

  return (
    <div className="absolute left-10 md:left-[160px] flex flex-wrap justify-[inerhit] w-[full-10rem] overflow-x-hidden h-auto">
      {images.map((image) => (
        <div key={image.id} className='pl-6 md:pl-18 h-auto w-full basis-[25%] capitalize my-7'>
          <img src={image.img} alt={image.name} className='h-36 md:h-48 w-32 md:w-48 rounded-2xl' />
          <h4 className='my-2'>{image.name}</h4>
          <p className='my-1'>Price: ${image.price}</p>
          <button className='bg-slate-600 w-32 md:w-48 rounded-xl h-10 text-white hover:bg-slate-800 capitalize' onClick={() => addtocart(image)}>add to cart</button>
        </div>
      ))}
    </div>
  );
}

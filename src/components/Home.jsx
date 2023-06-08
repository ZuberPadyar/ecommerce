import React, { useContext } from 'react';
import { Cardcontext } from './Context';

export default function Home() {
  const images = [
    {
      id: 1,
      img: 'https://m.media-amazon.com/images/I/5160RpPgKrS._SX522_.jpg',
      name: 'boat earphone',
      price: '100',
    },
    {
      id: 2,
      img: 'https://m.media-amazon.com/images/I/3150P3KQFlL._SY445_SX342_QL70_FMwebp_.jpg',
      name: 'iphone13',
      price: '100',
    },
    {
      id: 3,
      img: 'https://m.media-amazon.com/images/I/31MX9scnEzL._SY445_SX342_QL70_FMwebp_.jpg',
      name: 'iphone 13 pro',
      price: '100',
    },
    {
      id: 4,
      img: 'https://m.media-amazon.com/images/I/71L5lSfJIPS._SX522_.jpg',
      name: 'wireless charger',
      price: '100',
    },
    {
      id: 5,
      img: 'https://m.media-amazon.com/images/I/416m55O9C8L.jpg',
      name: 'nike',
      price: '100',
    },
    {
      id: 6,
      img: 'https://m.media-amazon.com/images/I/31opDxIiecL._SY445_SX342_QL70_FMwebp_.jpg',
      name: 'adidas',
      price: '100',
    },
    {
      id: 7,
      img: 'https://m.media-amazon.com/images/I/717wZ9Wh4eL._SX679_.jpg',
      name: 'acer',
      price: '1000',
    },
    {
      id: 8,
      img: 'https://m.media-amazon.com/images/I/41Eb4yFX38L._SY300_SX300_QL70_FMwebp_.jpg',
      name: 'lg',
      price: '1100',
    },
    {
      id: 9,
      img: 'https://m.media-amazon.com/images/I/717wZ9Wh4eL._SX679_.jpg',
      name: 'asus',
      price: '1200',
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
    <div className="absolute left-10 md:left-[160px] flex flex-wrap justify-[inerhit] w-[full-10rem] overflow-x-hidden h-auto ">
      {images.map((image) => (
        <div key={image.id} className='pl-6 md:pl-18 h-auto w-full basis-[25%] capitalize my-7 hover:scale-110 transition-all duration-500 ease-out'>
          <img src={image.img} alt={image.name} className='h-36 md:h-48 w-32 md:w-48 rounded-2xl hover:opacity-80' />
          <h4 className='my-2'>{image.name}</h4>
          <p className='my-1'>Price: ${image.price}</p>
          <button className='bg-slate-600 w-32 md:w-48 rounded-xl h-10 text-white hover:bg-slate-800 capitalize' onClick={() => addtocart(image)}>add to cart</button>
        </div>
      ))}
    </div>
  );
}

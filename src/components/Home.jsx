import React from 'react';
import Homepage from './Homepage';

export default function Home() {

  const images = [
    {
      id:1,
      img: 'https://static.pexels.com/photos/36753/flower-purple-lical-blosso.jpg',
      name: 'flower',
      price: '100',
    },
    {
      id:2,
      img: 'https://static.pexels.com/photos/36753/flower-purple-lical-blosso.jpg',
      name: 'flower',
      price: '100',
    },
    {
      id:3,
      img: 'https://static.pexels.com/photos/36753/flower-purple-lical-blosso.jpg',
      name: 'flower',
      price: '100',
    },
    {
      id:4,
      img: 'https://static.pexels.com/photos/36753/flower-purple-lical-blosso.jpg',
      name: 'flower',
      price: '100',
    },
    {
      id:5,
      img: 'https://static.pexels.com/photos/36753/flower-purple-lical-blosso.jpg',
      name: 'flower',
      price: '100',
    },
    {
      id:6,
      img: 'https://static.pexels.com/photos/36753/flower-purple-lical-blosso.jpg',
      name: 'flower',
      price: '100',
    },
    {
      id:7,
      img: 'https://static.pexels.com/photos/36753/flower-purple-lical-blosso.jpg',
      name: 'flower',
      price: '100',
    },
    {
      id:8,
      img: 'https://static.pexels.com/photos/36753/flower-purple-lical-blosso.jpg',
      name: 'flower',
      price: '100',
    },
  ];

  return (
    <div className="absolute left-[160px] flex flex-wrap justify-[inerhit] w-[full-10rem] overflow-x-hidden h-auto">
      {images.map((image, index) => (
        <Homepage key={index} image={image} />
      ))}
    </div>
  );
}

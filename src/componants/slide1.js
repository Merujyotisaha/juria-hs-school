import React, { useState } from 'react';
import '../index.css';

const photos = [
  'photo1.jpg',
  'photo2.jpg',
  'photo3.jpg',
];

const Slideshow = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((index + 1) % photos.length);
  };

  const handlePrev = () => {
    setIndex((index + photos.length - 1) % photos.length);
  };

  return (
    <div className='slider1' , innerWidth>
      <img src={photos[index]} />
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Slideshow;

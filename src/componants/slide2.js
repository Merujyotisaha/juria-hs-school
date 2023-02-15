import React, { useState, useEffect } from 'react';
import '../index.css';

const photos = [
  './images/guno1.jpg',
  './images/guno2.jpg',
  './images/guno3.jpg',
  './images/guno4.jpg',
  './images/guno5.jpg',
  './images/guno6.jpg',
  './images/guno7.jpg',
  './images/guno8.jpg',
  './images/guno9.jpg',
  './images/guno10.jpg',
  './images/guno11.jpg',
  './images/guno12.jpg',
  './images/guno13.jpg',
  './images/guno14.jpg',
  './images/guno15.jpg',
  './images/guno16.jpg',
  './images/guno17.jpg',
  './images/guno18.jpg',
  
  './images/guno20.jpg',
  './images/guno21.jpg',
  './images/guno22.jpg',
  './images/guno23.jpg',
  './images/guno24.jpg',
  './images/guno25.jpg',
  './images/guno26.jpg',
  './images/guno27.jpg',
  './images/guno28.jpg',
  
];

const Slideshow = () => {
  const [index, setIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  useEffect(() => {
    let intervalId = null;
    if (isAutoplay) {
      intervalId = setInterval(() => {
        setIndex((index + 1) % photos.length);
      }, 2000);
    }
    return () => clearInterval(intervalId);
  }, [index, isAutoplay]);

  const handleNext = () => {
    setIndex((index + 1) % photos.length);
  };

  const handlePrev = () => {
    setIndex((index + photos.length - 1) % photos.length);
  };

  return (
    <div className='slider2'>
      <img src={photos[index]} />
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
      
        <input
          type="checkbox"
          checked={isAutoplay}
          onChange={(e) => setIsAutoplay(e.target.checked)}
        />
        Autoplay
      
    </div>
  );
};

export default Slideshow;

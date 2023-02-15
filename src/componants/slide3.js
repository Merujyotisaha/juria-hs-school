import React, { useState, useEffect } from 'react';
import '../index.css';

const photos = [
  './images/sport1.jpg',
  './images/sport2.jpg',
  './images/sport3.jpg',
  './images/sport4.jpg',
  './images/sport5.jpg',
  './images/sport6.jpg',
  './images/sport7.jpg',
  './images/sport8.jpg',
  './images/sport9.jpg',
  './images/sport10.jpg',
  './images/sport11.jpg',
  './images/sport12.jpg',
  './images/sport13.jpg',
  './images/sport14.jpg',
  './images/sport15.jpg',
  './images/sport16.jpg',
  './images/sport17.jpg',
  './images/sport18.jpg',
  './images/sport19.jpg',
  './images/sport20.jpg',
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
    <div className='slider3'>
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

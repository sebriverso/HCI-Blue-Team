import React, { useState, useEffect } from 'react';

const Slideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    './slideshow1.png',
    'image2.jpg',
    'image3.jpg'
  ];
  //aacms_web_app\public\slideshow1.png

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
      <img
        src= "./slideshow1.png"
        alt= "Slideshow"
      />
    </div>
  );
};

export default Slideshow;

import React, { useState, useEffect } from 'react';

const Slideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    './slideshow1.png',
    './aacms_img1.png',
    './aacms_img2.png'
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
    <div style={{  marginBottom: '16px' }}>
      <img
        src= "./slideshow1.png"
        alt= "Slideshow"
      />
    </div>
  );
};

export default Slideshow;

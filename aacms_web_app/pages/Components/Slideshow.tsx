import React, { useState, useEffect } from 'react';

const Slideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    './slideshow1.png',
    './aacms_img1.jpg',
    './aacms_img2.jpg'
  ];

  const goToNextImage = () => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(goToNextImage, 5000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div style={{ position: 'relative', marginBottom: '16px' }}>
      <button onClick={goToPreviousImage} style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)', background: 'transparent', border: 'none', fontSize: '48px' }}>
        &lt;
      </button>
      <button onClick={goToNextImage} style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', background: 'transparent', border: 'none', fontSize: '48px' }}>
        &gt;
      </button>
      <img
        src={images[currentImageIndex]}
        alt="Slideshow"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </div>
  );
};

export default Slideshow;

import React, { useState, useEffect } from 'react';

const ParallaxBackground: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const bgStyle: React.CSSProperties = {
    backgroundImage: 'radial-gradient(circle, #8892B020 1px, transparent 1px)',
    backgroundSize: '2rem 2rem',
    transform: `translateY(${offsetY * 0.5}px)`,
  };

  return (
    <div 
      className="absolute inset-0 w-full h-full z-0"
      style={bgStyle}
      aria-hidden="true"
    />
  );
};

export default ParallaxBackground;

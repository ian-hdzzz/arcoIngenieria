


import React, { useEffect, useState } from 'react';

const VerticalCarousel = () => {
  const [offset1, setOffset1] = useState(0);
  const [offset2, setOffset2] = useState(0);
  const [offset3, setOffset3] = useState(0);
  const [direction1, setDirection1] = useState(1);
  const [direction2, setDirection2] = useState(-1);
  const [direction3, setDirection3] = useState(1);

  const images = [
    // Imágenes originales
    '/img/img2.jpeg',
    '/img/img4.jpeg',
    '/img/img10.jpeg',
    '/img/img13.jpeg',
    '/img/img25.jpg',
    '/img/img27.png',
    '/img/img28.png',
    '/img/img3.jpeg',
    // Nuevas imágenes
    '/img/img1.jpeg',
    '/img/img4.jpeg',
    '/img/img6.jpeg',
    '/img/img5.jpeg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset1(prev => {
        const newOffset = prev + (direction1 * 1.2); // Aumentado de 0.5 a 1.2
        if (newOffset > 100) {
          setDirection1(-1);
          return 100;
        } else if (newOffset < -100) {
          setDirection1(1);
          return -100;
        }
        return newOffset;
      });

      setOffset2(prev => {
        const newOffset = prev + (direction2 * 0.8); // Aumentado de 0.3 a 0.8
        if (newOffset > 100) {
          setDirection2(-1);
          return 100;
        } else if (newOffset < -100) {
          setDirection2(1);
          return -100;
        }
        return newOffset;
      });

      setOffset3(prev => {
        const newOffset = prev + (direction3 * 1.0); // Aumentado de 0.4 a 1.0
        if (newOffset > 100) {
          setDirection3(-1);
          return 100;
        } else if (newOffset < -100) {
          setDirection3(1);
          return -100;
        }
        return newOffset;
      });
    }, 30); // Reducido de 50ms a 30ms para más fluidez

    return () => clearInterval(interval);
  }, [direction1, direction2, direction3]);

  const Column = ({ images: columnImages, offset }: { images: string[], offset: number }) => (
    <div className="flex flex-col gap-4 transform" style={{ transform: `translateY(${offset}px)` }}>
      {columnImages.map((img, index) => (
        <div 
          key={index} 
          className="w-full h-64 md:h-64 lg:h-80 rounded-2xl overflow-hidden shadow-2xl"
        >
          <img 
            src={img} 
            alt={`Proyecto ARCO ${index + 1}`}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
        </div>
      ))}
      {columnImages.map((img, index) => (
        <div 
          key={`duplicate-${index}`} 
          className="w-full h-64 md:h-64 lg:h-80 rounded-2xl overflow-hidden shadow-2xl"
        >
          <img 
            src={img} 
            alt={`Proyecto ARCO ${index + 1} duplicate`}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
        </div>
      ))}
      {columnImages.map((img, index) => (
        <div 
          key={`duplicate2-${index}`} 
          className="w-full h-64 md:h-64 lg:h-80 rounded-2xl overflow-hidden shadow-2xl"
        >
          <img 
            src={img} 
            alt={`Proyecto ARCO ${index + 1} duplicate2`}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
        </div>
      ))}
    </div>
  );

  // Distribución más balanceada de las imágenes en las columnas
  const column1Images = images.slice(0, 4);
  const column2Images = images.slice(4, 8);
  const column3Images = images.slice(8, 12);

  return (
    <div className="absolute bg-white inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full px-4 py-8">
        <div className="overflow-hidden">
          <Column images={column1Images} offset={offset1} />
        </div>
        <div className="overflow-hidden hidden md:block">
          <Column images={column2Images} offset={offset2} />
        </div>
        <div className="overflow-hidden hidden md:block">
          <Column images={column3Images} offset={offset3} />
        </div>
      </div>
    </div>
  );
};

export default VerticalCarousel;
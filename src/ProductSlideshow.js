import React, { useState, useEffect } from 'react';
import image1 from './image 1.png';
import image2 from './image 2.png';
import image3 from './image 3.png';

const images = [image1, image2, image3];

const ProductSlideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between mx-14 my-10 md:my-20">
      <div className="flex flex-col justify-center md:w-[739px] space-y-4 md:space-y-6">
        <button className="flex items-center text-sm md:text-base font-normal text-gray-800 mb-4 md:mb-0 cursor-pointer">
          Craft your perfect home with our future <i className="material-icons ml-2">arrow_forward</i>
        </button>
        <div className="text-3xl md:text-4xl font-semibold text-black leading-tight">
          Elevate your Space with Crafted Charm Furniture Designed for Timeless Elegance
        </div>
        <div className="text-lg md:text-xl font-normal text-gray-500">
          Explore our unique selection of handcrafted furniture made to add elegance and coziness to any space
        </div>
        <button className="w-1/2 md:w-[150px] h-12 bg-gray-800 text-white rounded-lg">
          Shop Now
        </button>
      </div> 
      <div className="flex">
        <button
          className="my-auto transform -translate-y-1/2 w-8 h-8 bg-gray-800 text-white rounded-full items-center justify-center"
          onClick={previousImage}
        >
          <i className="material-icons">chevron_left</i>
        </button>
        <img
          src={images[currentImageIndex]}
          alt="Product"
          className="w-[450px] h-[560px] object-fill rounded-lg"
        />
        <button
          className="my-auto transform -translate-y-1/2 w-8 h-8  bg-gray-800 text-white rounded-full flex items-center justify-center"
          onClick={nextImage}
        >
          <i className="material-icons">chevron_right</i>
        </button> 
      </div>
    </div>
  );
};

export default ProductSlideshow;

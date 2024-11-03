import React from 'react';
import CustomIconContainer from './CustomIconContainer';

const ProductCard = ({ name, price, imageUrl, rating, reviews }) => {
  return (
    <div className="w-[408px] rounded-lg bg-white overflow-hidden shadow-md">
      <img src={imageUrl} alt={name} className="w-full h-[338px] " />
      <div className="p-4 flex justify-between">
        <div className='text-start'>
          <div className="text-xl font-semibold text-black">{name}</div>
          <div className="text-lg font-semibold text-black">{price}</div>
          <div className="text-sm font-normal text-gray-500">
            <i className="material-icons text-yellow-400 mr-1">star</i>
            {rating} ({reviews} Reviews)  
          </div>
        </div>
        <div className='items-center my-auto'>
            <CustomIconContainer />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

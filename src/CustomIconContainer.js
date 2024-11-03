import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';

const CustomIconContainer = () => {
  const [clickedCart, setClickedCart] = useState(false);
  const [clickedLove, setClickedLove] = useState(false);

  const handleCartClick = () => {
    setClickedCart(!clickedCart);
  };

  const handleLoveClick = () => {
    setClickedLove(!clickedLove);
  };

  return (
    <div className="w-[58.16px] flex justify-between mx-auto">
      <FontAwesomeIcon
        icon={faShoppingCart}
        onClick={handleCartClick}
        className={`w-6 h-6 cursor-pointer ${clickedCart ? 'text-red-500' : 'text-gray-800'}`}
      />
      <FontAwesomeIcon
        icon={faHeart}
        onClick={handleLoveClick}
        className={`w-6 h-6 cursor-pointer ${clickedLove ? 'text-red-500' : 'text-gray-800'}`}
      />
    </div>
  );
};

export default CustomIconContainer;

import React, { useState } from 'react';
import image1 from './image 2.png';
import image2 from './Product2.jpg';
import image3 from './product 4.png';
import image4 from './image 4.jpg';

const ProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(image1);
  const [selectedColor, setSelectedColor] = useState('#BBB1A7');
  const [quantity, setQuantity] = useState(1);
  
  // Hardcoded product details
  const product = {
    name: "Airpods Max",
    price: 549.00,
    rating: 4.5,
    reviews: 121,
    itemLeft: 12,
    images: [image1, image2, image3, image4],
    colors: ['#BBB1A7', '#82572C', '#C6CFD7', '#234566', '#313639']
  };

  const handleQuantityChange = (action) => {
    if (action === 'increase' && quantity < product.itemLeft) {
      setQuantity(prev => prev + 1);
    } else if (action === 'decrease' && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className="flex h-screen p-8">
      {/* Product Image Section */}
      <div className="flex flex-col w-[50%] h-screen space-y-[2%]">
        <div className="w-full h-[70%]">
          <img src={selectedImage} alt="Product" className="w-full h-full object-fill" />
        </div>
        <div className="flex justify-between w-[100%] h-[20%]">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className={`w-[22%] h-full object-fill border ${selectedImage === image ? 'border-orange-600' : 'border-transparent'} cursor-pointer`}
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>
      </div>

      {/* Product Details Section */}
      <div className="w-[50%] h-screen ml-10 flex flex-col ">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-black">{product.name}</h2>
          <p className="text-lg md:text-xl text-gray-500 mt-4">
            A perfect balance of exhilarating high-fidelity audio and the effortless magic of AirPods.
          </p>
          <div className="text-sm font-normal mb-12 text-gray-500 flex items-center">
            <i className="material-icons text-yellow-400 mr-1">star</i>
            <span>{product.rating} ({product.reviews} Reviews)</span>
          </div>
          <p className="text-2xl md:text-3xl font-semibold mb-12 text-black">${product.price.toFixed(2)}</p>
        </div>

        {/* Color Selection */}
        <p className="mt-4 font-bold mb-2">Choose a color</p>
        <div className="flex space-x-4 mb-10">
          {product.colors.map((color, index) => (
            <div
              key={index}
              className={`w-[60px] h-[60px] rounded-full border ${selectedColor === color ? 'border-orange-600' : 'border-transparent'} cursor-pointer`}
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
            />
          ))}
        </div>

        {/* Quantity Selection */}
        <div className="flex mt-4 items-center mb-6 ">
          <div className="flex justify-center bg-gray-200 rounded-xl p-2">
            <button className="px-2 text-2xl" onClick={() => handleQuantityChange('decrease')}>-</button>
            <span className="text-xl px-4">{quantity}</span>
            <button className="px-2 text-2xl" onClick={() => handleQuantityChange('increase')}>+</button>
          </div>
          <p className="ml-4 text-lg text-gray-500">Only {product.itemLeft} items left. Don’t miss it!</p>
        </div>

        {/* Buttons */}
        <div className="flex space-x-8 mb-10">
          <button className="w-[20%] h-12 bg-gray-800 text-white rounded-lg">Add to Cart</button>
          <button className="w-[20%] h-12 bg-gray-200 text-black rounded-lg">Add to Wishlist</button>
        </div>

        {/* Delivery Info */}
        <div className="p-3 mt-4">
          <div className="flex p-1">
            <span className="material-icons w-6 h-6 text-orange-400">local_shipping</span>
            <div>
              <p className="font-bold">Free Delivery</p>
              <p>Enter your Postal code for Delivery Availability</p>
            </div>
          </div>
          <div className="flex p-1">
            <span className="material-icons w-6 h-6 text-orange-400">event_note</span>
            <div>
              <p className="font-bold">Return Delivery</p>
              <p>Free 30-day Delivery Returns. Details</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

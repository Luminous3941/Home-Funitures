import React from 'react';
import ProductCard from './ProductCard';
import product1 from './Product1.jpg';
import product2 from './Product2.jpg';
import product3 from './Product3.jpg';

const products = [
  {
    name: "King's Delight Sofa",
    price: '$500.00',
    imageUrl: product1,
    rating: 4.25,
    reviews: 12,
  },
  {
    name: 'Royal Comfort Bed',
    price: '$800.00',
    imageUrl: product2,
    rating: 4.5,
    reviews: 8,
  },
  {
    name: 'Elegant Dining Table',
    price: '$350.00',
    imageUrl: product3,
    rating: 4.0,
    reviews: 15,
  },
  {
    name: 'Elegant Dining Table',
    price: '$350.00',
    imageUrl: product3,
    rating: 4.0,
    reviews: 15,
  },
  {
    name: 'Elegant Dining Table',
    price: '$350.00',
    imageUrl: product3,
    rating: 4.0,
    reviews: 15,
  },
  {
    name: 'Elegant Dining Table',
    price: '$350.00',
    imageUrl: product3,
    rating: 4.0,
    reviews: 15,
  },
  // Add more products as needed
];

const ProductsSection = () => {
  return (
    <div className="w-full text-center mx-auto">
      <h2 className="font-sans font-medium text-xl text-black my-10">
        Our Products
      </h2>
      <div className="flex justify-between items-center w-full max-w-screen-lg mx-auto my-5">
        <div className="flex justify-start space-x-2">
          <a href="/" className="font-sans text-base text-black no-underline">
            All Products
          </a>
          <a href="/" className="font-sans text-base text-black no-underline">
            Living Room
          </a>
          <a href="/" className="font-sans text-base text-black no-underline">
            Bedroom
          </a>
          <a href="/" className="font-sans text-base text-black no-underline">
            Kitchen
          </a>
          <a href="/" className="font-sans text-base text-black no-underline">
            Table
          </a>
        </div>
        <div className="flex items-center space-x-2 font-sans text-base text-black">
          <span>Filter</span>
          <i className="material-icons">expand_more</i>
        </div>
      </div>
      <div className="flex flex-wrap w-[90%]  mx-auto gap-4">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            price={product.price}
            imageUrl={product.imageUrl}
            rating={product.rating}
            reviews={product.reviews}
          />
        ))}
      </div>
      <div className="flex justify-center items-center my-10">
        <span className='mr-4'>Results 1-11 of 50</span>
        <div className="flex space-x-4">
          <button className="text-black  border-none rounded-full">
            <i className="material-icons">chevron_left</i>
          </button>
          <button className="bg-gray-700 text-white border-none px-2 py-1 rounded-full">
            1
          </button>
          <button className="bg-gray-700 text-white border-none px-2 py-1 rounded-full">
            2
          </button>
          <button className="bg-gray-700 text-white border-none px-2 py-1 rounded-full">
            3
          </button>
          <button className="text-black border-none rounded-full">
            <i className="material-icons">chevron_right</i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;

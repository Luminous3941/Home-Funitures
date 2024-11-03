// import React, { useState } from 'react';
import image1 from './image 2.png';
import CartProduct from './CartProduct'; // Importing the corrected component

const CartPage = () => {
  const products = [
    {
      name: "King's Delight Sofa",
      price: '$500.00',
      imageUrl: image1,
    },
    {
      name: "King's Delight Sofa",
      price: '$500.00',
      imageUrl: image1,
    },
    {
      name: "King's Delight Sofa",
      price: '$500.00',
      imageUrl: image1,
    },
    {
      name: "King's Delight Sofa",
      price: '$500.00',
      imageUrl: image1,
    }
  ];

  // Subtotal, Shipping, and Total logic can remain the same or be calculated dynamically.
  const calculateSubtotal = () => {
    // You would dynamically calculate the subtotal based on all the cart products' quantities and prices
    return products.reduce((acc, product) => acc + parseFloat(product.price.slice(1)), 0).toFixed(2);
  };

  const calculateShipping = () => {
    return 50.00; // Example shipping value
  };

  const calculateTotal = () => {
    return (parseFloat(calculateSubtotal()) + calculateShipping()).toFixed(2);
  };

  return (
    <div className="w-full max-w-6xl mx-auto my-6 flex flex-col justify-between">
      <h1 className="mx-auto text-black text-2xl font-medium leading-tight">Cart</h1>

      <div className="flex justify-between gap-8 mt-4">
        <div>
          {products.map((product, index) => (
            <CartProduct
              key={index}
              name={product.name}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          ))}
        </div>

        {/* Order Summary */}
        <div className="flex flex-col gap-2 w-full max-w-sm p-4">
          <div className="border-b border-black p-4">
            <h2 className="text-lg font-medium">Order Summary</h2>
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>${calculateSubtotal()}</p>
            </div>
            <div className="flex justify-between">
              <p>Shipping</p>
              <p>${calculateShipping().toFixed(2)}</p>
            </div>
          </div>
          <div className="flex justify-between border-t border-black mt-6 pt-4">
            <p className="text-lg font-semibold">Total</p>
            <p className="text-lg font-semibold">${calculateTotal()}</p>
          </div>
          <button className="w-full h-12 mt-6 rounded-lg bg-gray-800 text-white text-lg text-center">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

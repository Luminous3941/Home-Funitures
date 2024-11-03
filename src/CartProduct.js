import React, { useState } from 'react';

const CartProduct = ({ name, price, imageUrl }) => {
    const [quantity, setQuantity] = useState(1); // Default quantity is set to 1

    const onIncrease = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const onDecrease = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const calculateTotalPrice = () => {
        return (parseFloat(price.slice(1)) * quantity).toFixed(2); // Convert price string to number and multiply by quantity
    };

    return (
        <div className="border-b border-black p-4 flex justify-between items-center">
            <div className="flex gap-6 w-full">
                <div className="flex gap-6 items-center">
                    <img src={imageUrl} alt={name} className="w-24 h-32" />
                    <p className="text-lg font-semibold">{name}</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-4">
                        <button onClick={onDecrease} className="bg-gray-200 w-6 h-6 rounded-full">-</button>
                        <p className="text-lg text-center">{quantity}</p>
                        <button onClick={onIncrease} className="bg-gray-200 w-6 h-6 rounded-full">+</button>
                    </div>
                    <p className="text-lg font-bold">${calculateTotalPrice()}</p>
                    <button className="bg-white w-6 h-6 rounded-full">
                        <span className="material-icons text-gray-800 ml-5">delete_forever</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartProduct;

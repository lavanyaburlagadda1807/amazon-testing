import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <div>
          <p>Your cart is currently empty.</p>
          <img src="https://images.unsplash.com/photo-1699004642536-b790e3b41f9c" alt="Empty Cart" className="w-full h-64 object-cover rounded-md shadow-md" />
        </div>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="mb-4 p-4 bg-white rounded-md shadow-md">
              <img src={item.image} alt={item.name} className="w-full h-32 object-cover rounded-md" />
              <h3 className="text-xl font-bold mt-2">{item.name}</h3>
              <p className="text-gray-700">{item.price}</p>
              <div className="flex items-center mt-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="px-2 py-1 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition"
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-2 py-1 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-4 px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;

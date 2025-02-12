import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const products = [
  {
    id: 1,
    name: 'Laptop',
    image: 'https://images.unsplash.com/photo-1699004642536-b790e3b41f9c',
    price: '$999',
    description: 'High performance laptop for all your needs.',
    reviews: ['Great product!', 'Very satisfied', 'Worth the price']
  },
  {
    id: 2,
    name: 'Smartphone',
    image: 'https://images.unsplash.com/photo-1699004642536-b790e3b41f9c',
    price: '$499',
    description: 'Latest smartphone with advanced features.',
    reviews: ['Amazing phone!', 'Love it', 'Highly recommend']
  },
  {
    id: 3,
    name: 'Headphones',
    image: 'https://images.unsplash.com/photo-1699004642536-b790e3b41f9c',
    price: '$199',
    description: 'Noise-cancelling headphones for immersive sound.',
    reviews: ['Excellent sound quality', 'Comfortable to wear', 'Great value']
  }
];

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart, cartItems, updateQuantity } = useCart();
  const product = products.find(p => p.id === parseInt(id));
  const cartItem = cartItems.find(item => item.id === product.id);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-md shadow-md" />
      <p className="text-xl mt-4">{product.price}</p>
      <p className="text-gray-700 mt-2">{product.description}</p>
      <div className="mt-4 flex items-center">
        {cartItem ? (
          <>
            <button
              onClick={() => updateQuantity(product.id, cartItem.quantity - 1)}
              className="bg-gray-300 text-black px-2 py-1 rounded-md hover:bg-gray-400 transition"
            >
              -
            </button>
            <span className="mx-2">{cartItem.quantity}</span>
            <button
              onClick={() => updateQuantity(product.id, cartItem.quantity + 1)}
              className="bg-gray-300 text-black px-2 py-1 rounded-md hover:bg-gray-400 transition"
            >
              +
            </button>
          </>
        ) : (
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Add to Cart
          </button>
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-bold">Reviews:</h3>
        <ul className="list-disc list-inside">
          {product.reviews.map((review, index) => (
            <li key={index} className="text-gray-600">{review}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetail;

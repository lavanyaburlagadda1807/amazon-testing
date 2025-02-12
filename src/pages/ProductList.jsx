import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Laptop',
    image: 'https://images.unsplash.com/photo-1699004642536-b790e3b41f9c',
    price: '$999'
  },
  {
    id: 2,
    name: 'Smartphone',
    image: 'https://images.unsplash.com/photo-1699004642536-b790e3b41f9c',
    price: '$499'
  },
  {
    id: 3,
    name: 'Headphones',
    image: 'https://images.unsplash.com/photo-1699004642536-b790e3b41f9c',
    price: '$199'
  }
];

const ProductList = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map(product => (
          <div key={product.id} className="bg-white p-4 rounded-md shadow-md">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
            <h3 className="text-xl font-bold mt-2">{product.name}</h3>
            <p className="text-gray-700">{product.price}</p>
            <Link to={`/products/${product.id}`} className="text-blue-500 mt-2 block">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

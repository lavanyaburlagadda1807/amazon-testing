import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import cartIcon from 'https://images.unsplash.com/photo-1699004642536-b790e3b41f9c';

const Navbar = () => {
  const { cartItems } = useCart();

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Amazon-like</Link>
        <div>
          <Link to="/products" className="mx-2">Products</Link>
          <Link to="/cart" className="mx-2 relative">
            <img src={cartIcon} alt="Cart" className="w-6 h-6 inline" />
            {cartItems.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 text-xs">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

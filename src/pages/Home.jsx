import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-3xl font-bold mb-4">Welcome to Amazon-like Store</h1>
      <img src="https://images.unsplash.com/photo-1699004642536-b790e3b41f9c" alt="Hero Section" className="w-full h-64 object-cover rounded-md shadow-md mb-8" />
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
        <img src="https://images.unsplash.com/photo-1699004642536-b790e3b41f9c" alt="Upcoming Events" className="w-full h-40 object-cover rounded-md shadow-md" />
        <p className="text-gray-700 mt-2">Join our upcoming events to explore more exciting products and offers.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Suggested Products</h2>
        <img src="https://images.unsplash.com/photo-1699004642536-b790e3b41f9c" alt="Suggested Products" className="w-full h-40 object-cover rounded-md shadow-md" />
        <p className="text-gray-700 mt-2">Check out our top picks for you based on your interests and previous purchases.</p>
      </section>
    </motion.div>
  );
};

export default Home;

import React, { useState } from 'react';
import { FiShoppingCart, FiSearch, FiUser, FiMenu, FiX } from 'react-icons/fi';
import Footer from '../components/Footer';

const CarPartsShop = () => {
  const [cartItems, setCartItems] = useState(0);

  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Performance', 'Exterior', 'Interior', 'Lighting', 'Wheels'];
  
  const products = [
    {
      id: 1,
      name: 'Neon Underbody Kit',
      price: 299.99,
      category: 'Lighting',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bbbfa5c831?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      featured: true
    },
    {
      id: 2,
      name: 'Carbon Fiber Spoiler',
      price: 449.99,
      category: 'Exterior',
      image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 3,
      name: 'Turbocharger T-3000',
      price: 1299.99,
      category: 'Performance',
      image: 'https://images.unsplash.com/photo-1554744512-d6c603f27a54?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      featured: true
    },
    {
      id: 4,
      name: 'LED Halo Headlights',
      price: 199.99,
      category: 'Lighting',
      image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 5,
      name: 'Racing Seats',
      price: 799.99,
      category: 'Interior',
      image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 6,
      name: 'Forged Alloy Wheels',
      price: 1499.99,
      category: 'Wheels',
      image: 'https://images.unsplash.com/photo-1555215278-1b3d38776157?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    }
  ];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const addToCart = () => {
    setCartItems(cartItems + 1);
  };

  return (
    <div className="h-screen bg-gray-900 text-gray-100">
    
      {/* Hero Section */}
      <section className="relative h-[75%] bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0  bg-cover bg-center opacity-70" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1283&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}></div>
        <div className="container mx-auto px-4 pl-12 top-14 h-full flex flex-col justify-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            FUTURE OF AUTOMOTIVE
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
            Upgrade your ride with our premium selection of high-performance parts and futuristic modifications.
          </p>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full font-bold hover:opacity-90 transition-opacity w-fit">
            SHOP NOW
          </button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 bg-black">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <span className="bg-cyan-500 w-2 h-6 mr-2"></span>
            FEATURED PRODUCTS
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.filter(p => p.featured).map(product => (
              <div key={product.id} className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all group">
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <button 
                      onClick={addToCart}
                      className="bg-cyan-600 text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-cyan-500 transition-colors"
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-lg mb-1">{product.name}</h4>
                  <p className="text-cyan-400 font-bold">${product.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-cyan-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 bg-black">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <span className="bg-cyan-500 w-2 h-6 mr-2"></span>
            {selectedCategory === 'All' ? 'ALL PRODUCTS' : selectedCategory.toUpperCase()}
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <div key={product.id} className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all group">
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <button 
                      onClick={addToCart}
                      className="bg-cyan-600 text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-cyan-500 transition-colors"
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-lg mb-1">{product.name}</h4>
                  <p className="text-cyan-400 font-bold">${product.price.toFixed(2)}</p>
                  <span className="inline-block mt-2 text-xs px-2 py-1 bg-gray-700 rounded-full">
                    {product.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-2">JOIN OUR NEWSLETTER</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Get exclusive deals, new product announcements, and customization tips straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-full bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <button className="bg-cyan-600 text-white px-6 py-3 rounded-full font-bold hover:bg-cyan-500 transition-colors">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
   
    </div>
  );
};

export default CarPartsShop;
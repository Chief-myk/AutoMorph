import React, { useState } from "react";
import Particles from "../components/Particle";
import Footer from "../components/Footer";
import {
  FaShippingFast,
  FaLock,
  FaCheckCircle,
  FaHeadset,
  FaSmile,
} from "react-icons/fa";

// Sample product data
const products = [
  {
    id: 1,
    name: "Hewlett-Packard Chrome Rims",
    price: 230,
    oldPrice: 260,
    discount: "-12%",
    image: "/CarParts/generated-image.png",
  },
  {
    id: 2,
    name: "Apple Chrome Engine",
    price: 120,
    oldPrice: 150,
    discount: "-20%",
    image: "/CarParts/gen5.png",
  },
  {
    id: 3,
    name: "Apple Lyptus Lens",
    price: 100,
    oldPrice: 140,
    discount: "-29%",
    image: "/CarParts/generated-image4.png",
  },
  {
    id: 4,
    name: "Apple Meque Metus",
    price: 150,
    oldPrice: 180,
    discount: "-17%",
    image: "/CarParts/generated-image3.png",
  },
  {
    id: 5,
    name: "Apple Quisque in Hara",
    price: 210,
    oldPrice: 250,
    discount: "-16%",
    image: "/CarParts/generated-image1.png",
  },
];

const Shop = () => {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const services = [
    {
      icon: <FaShippingFast size={24} />,
      title: "FREE DELIVERY",
      desc: "For all orders over $120",
    },
    {
      icon: <FaLock size={24} />,
      title: "SAFE PAYMENT",
      desc: "100% secure payment",
    },
    {
      icon: <FaCheckCircle size={24} />,
      title: "SHOP WITH CONFIDENCE",
      desc: "If goods have problems",
    },
    {
      icon: <FaHeadset size={24} />,
      title: "24/7 HELP CENTER",
      desc: "Dedicated support",
    },
    {
      icon: <FaSmile size={24} />,
      title: "FRIENDLY SERVICES",
      desc: "30-day satisfaction guarantee",
    },
  ];

  return (
    <div className="h-screen bg-gray-900 text-gray-100">
    
      {/* Hero Section */}
    <section className="relative py-16 md:py-24 px-6 text-white text-center overflow-hidden">
  {/* Radial glowing background + animated gradient */}
  <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.25),transparent_70%)] animate-pulse-slow" />

  {/* Floating animated blobs */}
  <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-700 opacity-20 rounded-full blur-3xl animate-pulse-fast"></div>
  <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-600 opacity-20 rounded-full blur-3xl animate-pulse-fast"></div>

  {/* Hero Content */}
  <div className="relative z-10 mt-10 animate-fade-in-up">
    <h2 className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-4 drop-shadow-xl">
      High Quality Pristine Pistons
    </h2>
    <p className="text-lg md:text-xl text-gray-300 mb-8 drop-shadow">
      Exclusive Offer -20% Off This Week
    </p>
    <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white font-bold rounded-xl shadow-xl transition duration-300 transform hover:scale-105">
      SHOPPING NOW
    </button>
  </div>
</section>


      {/* Services */}
      <section className="bg-gray-900 py-6 px-4 mt-4 grid rounded-3xl mx-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-white text-center animate-fade-in delay-200">
        {services.map((service, idx) => (
          <div key={idx} className="flex flex-col items-center hover:scale-105 transition">
            <div className="text-yellow-400 mb-2 animate-pulse">{service.icon}</div>
            <p className="font-semibold text-sm">{service.title}</p>
            <p className="text-xs text-gray-400">{service.desc}</p>
          </div>
        ))}
      </section>

      {/* Product Grid */}
      <section className="py-12 px-6">
          <div className="fixed inset-0 z-0 pointer-events-none opacity-25">
    <Particles
      particleColors={['#ffffff', '#f0f0f0', '#d1d5db']}
      particleCount={150}
      particleSpread={5}
      speed={0.1}
      particleBaseSize={100}
      moveParticlesOnHover={false}
      alphaParticles={false}
      disableRotation={false}
    />
  </div>

        <h3 className="text-2xl font-bold mb-6 text-center text-blue-400 animate-slide-up">Our Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-gray-800 p-4 rounded-2xl border border-blue-600 shadow-lg hover:shadow-blue-400/30 transition-transform transform hover:scale-105 animate-fade-in"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-contain rounded-lg bg-gray-700 mb-4"
                  />
                  <span className="absolute top-2 left-2 bg-pink-600 text-xs px-2 py-1 font-bold rounded-full animate-pulse">
                    {product.discount}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-purple-300 mb-2">
                  {product.name}
                </h4>
                <div className="text-sm text-gray-300 mb-2">
                  <span className="text-blue-400 text-xl font-bold">
                    ${product.price}
                  </span>{" "}
                  <span className="line-through text-gray-500">
                    ${product.oldPrice}
                  </span>
                </div>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 py-2 rounded-lg text-sm font-bold text-white hover:scale-105 transition-transform shadow-md shadow-blue-500/40"
                >
                  Add to Cart
                </button>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-400">No products match your search.</p>
          )}
        </div>
      </section>

      {/* Floating Go to Cart Button */}
      {cart.length > 0 && (
        <button
          className="fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg animate-bounce hover:bg-blue-700 transition z-50"
          onClick={() => alert("Cart clicked!")}
        >
          🛒 Go to Cart ({cart.length})
        </button>
      )}

      {/* Footer */}
      <Footer/>
   
    </div>
  );
};

export default Shop;

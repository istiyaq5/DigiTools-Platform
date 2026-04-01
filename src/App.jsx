import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Banner from "./components/Banner";
import Footer from "./components/Footer";
import MainSection from "./components/MainSection";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Stats from "./components/Stats";
import Steps from "./components/Steps";

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    // Prevent duplicates
    if (!cartItems.find((item) => item.id === product.id)) {
      setCartItems((prev) => [...prev, product]);
    }
  };

  const handleRemove = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const handleCheckout = () => {
    setCartItems([]);
  };

  return (
    <div className="font-sans antialiased bg-white">
      <Navbar cartCount={cartItems.length} />
      <main>
        <Banner />
        <Stats />
        <MainSection
          cartItems={cartItems}
          onAddToCart={handleAddToCart}
          onRemove={handleRemove}
          onCheckout={handleCheckout}
        />
        <Steps />
        <Pricing />
        {/* CTA */}
        <section className="bg-gradient-to- from-purple-600 to-indigo-600 py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4 leading-tight">
              Ready To Transform Your Workflow?
            </h2>
            <p className="text-purple-200 text-lg mb-10 leading-relaxed">
              Join thousands of professionals who use DigiTools to create
              faster, smarter, and better every day.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#main-section"
                className="bg-white text-purple-700 font-bold px-8 py-3.5 rounded-full hover:bg-purple-50 transition-colors shadow-lg"
              >
                Get Started Free
              </a>
              <a
                href="#main-section"
                className="border-2 border-white text-white font-bold px-8 py-3.5 rounded-full hover:bg-white hover:text-purple-700 transition-colors"
              >
                View All Tools
              </a>
            </div>
            <p className="text-purple-300 text-sm mt-6">
              No credit card required · Cancel anytime
            </p>
          </div>
        </section>
      </main>
      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </div>
  );
}

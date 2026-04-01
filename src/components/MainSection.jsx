import { useState } from "react";
import ProductCard from "./ProductCard";
import CartSection from "./CartSection";
import products from "../data/products.json";

export default function MainSection({ cartItems, onAddToCart, onRemove, onCheckout }) {
  const [activeTab, setActiveTab] = useState("products");

  return (
    <section id="main-section" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="inline-block bg-purple-100 text-purple-700 text-xs font-bold px-4 py-1.5 rounded-full mb-3 uppercase tracking-widest">
            Explore
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3">Premium Digital Tools</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            Everything you need to create, automate, and grow your digital presence in one powerful platform.
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center mb-10">
          <div className="bg-white border border-gray-200 rounded-full p-1 flex gap-1 shadow-sm">
            <button
              onClick={() => setActiveTab("products")}
              className={`px-7 py-2.5 rounded-full text-sm font-bold transition-all duration-200 ${
                activeTab === "products"
                  ? "bg-purple-600 text-white shadow-md"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Products
            </button>
            <button
              onClick={() => setActiveTab("cart")}
              className={`px-7 py-2.5 rounded-full text-sm font-bold transition-all duration-200 flex items-center gap-2 ${
                activeTab === "cart"
                  ? "bg-purple-600 text-white shadow-md"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Cart
              {cartItems.length > 0 && (
                <span className={`text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold leading-none ${
                  activeTab === "cart" ? "bg-white text-purple-700" : "bg-purple-600 text-white"
                }`}>
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === "products" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                cartItems={cartItems}
              />
            ))}
          </div>
        ) : (
          <CartSection
            cartItems={cartItems}
            onRemove={onRemove}
            onCheckout={onCheckout}
          />
        )}
      </div>
    </section>
  );
}

import { toast } from "react-toastify";

const TAG_STYLES = {
  "best-seller": "bg-orange-100 text-orange-600",
  popular: "bg-blue-100 text-blue-600",
  new: "bg-green-100 text-green-600",
};

export default function ProductCard({ product, onAddToCart, cartItems = [] }) {
  const isInCart = cartItems.some((item) => item.id === product.id);

  const handleBuy = () => {
    if (isInCart) return;
    onAddToCart(product);
    toast.success(`🛒 "${product.name}" added to cart!`, {
      position: "top-right",
      autoClose: 2500,
    });
  };

  return (
    <div className="border border-gray-100 rounded-2xl p-6 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col group">
      {/* Top row: icon + tag */}
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-2xl group-hover:bg-purple-100 transition-colors">
          {product.icon}
        </div>
        {product.tag && (
          <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${TAG_STYLES[product.tagType] || "bg-gray-100 text-gray-600"}`}>
            {product.tag}
          </span>
        )}
      </div>

      <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
      <p className="text-gray-500 text-sm mb-4 leading-relaxed flex-1">{product.description}</p>

      {/* Features */}
      <ul className="mb-5 space-y-1.5">
        {product.features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
            <svg className="w-4 h-4 text-purple-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            {f}
          </li>
        ))}
      </ul>

      {/* Price + Button */}
      <div className="flex items-end justify-between mt-auto pt-2 border-t border-gray-50">
        <div>
          <span className="text-2xl font-extrabold text-gray-900">${product.price}</span>
          <span className="text-gray-400 text-sm ml-1">/{product.period}</span>
        </div>
        <button
          onClick={handleBuy}
          disabled={isInCart}
          className={`text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 ${
            isInCart
              ? "bg-green-500 text-white scale-95 cursor-not-allowed opacity-90"
              : "bg-purple-600 hover:bg-purple-700 text-white"
          }`}
        >
          {isInCart ? "✓ Added!" : "Buy Now"}
        </button>
      </div>
    </div>
  );
}

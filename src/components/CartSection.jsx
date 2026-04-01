import { toast } from "react-toastify";

export default function CartSection({ cartItems, onRemove, onCheckout }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleRemove = (item) => {
    onRemove(item.id);
    toast.info(`🗑️ "${item.name}" removed from cart.`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  const handleCheckout = () => {
    onCheckout();
    toast.success("🎉 Checkout successful! Cart cleared.", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="text-6xl mb-5">🛒</div>
        <h3 className="text-xl font-bold text-gray-700 mb-2">Your cart is empty</h3>
        <p className="text-gray-400 text-sm max-w-xs">
          Browse our amazing products and add items to your cart to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="space-y-4 mb-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 bg-white border border-gray-100 rounded-2xl px-5 py-4 shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-2xl shrink-0">
              {item.icon}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-gray-900 text-sm truncate">{item.name}</h4>
              <p className="text-purple-600 font-semibold text-sm">${item.price}/{item.period}</p>
            </div>

            {/* Remove */}
            <button
              onClick={() => handleRemove(item)}
              className="flex items-center gap-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 text-sm font-medium px-3 py-2 rounded-lg transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="bg-linear-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 border border-purple-100">
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-500 text-sm">Total Items</span>
          <span className="font-bold text-gray-800">{cartItems.length}</span>
        </div>
        <div className="flex items-center justify-between mb-5 pb-4 border-b border-purple-100">
          <span className="text-gray-500 text-sm">Total Amount</span>
          <span className="text-2xl font-extrabold text-purple-700">${total}</span>
        </div>
        <button
          onClick={handleCheckout}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3.5 rounded-full transition-colors shadow-lg shadow-purple-200 flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

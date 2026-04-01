import { useState } from "react";

const NAV_LINKS = ["Products", "Features", "Pricing", "Testimonials", "FAQ"];

export default function Navbar({ cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-2xl font-extrabold text-purple-600 tracking-tight select-none">
          DigiTools
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors duration-150"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          {/* Cart Icon with badge */}
          <a href="#main-section" className="relative text-gray-500 hover:text-purple-600 transition-colors p-1">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6h13M7 13L5.4 5M10 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold leading-none">
                {cartCount}
              </span>
            )}
          </a>
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">Login</a>
          <a href="#" className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors shadow-sm">
            Get Started
          </a>
        </div>

        {/* Mobile: cart + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <a href="#main-section" className="relative text-gray-500 hover:text-purple-600 transition-colors p-1">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6h13M7 13L5.4 5M10 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold leading-none">
                {cartCount}
              </span>
            )}
          </a>
          <button
            className="text-gray-600 hover:text-gray-900 transition-colors"
            onClick={() => setMenuOpen((p) => !p)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round"
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 shadow-md">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <div className="flex items-center gap-4 pt-2 border-t border-gray-100">
            <a href="#" className="text-sm font-medium text-gray-700">Login</a>
            <a href="#" className="bg-purple-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full">Get Started</a>
          </div>
        </div>
      )}
    </header>
  );
}

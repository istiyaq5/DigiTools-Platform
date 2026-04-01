const FOOTER_LINKS = {
  Product: ["Features", "Templates", "Integrations", "Pricing"],
  Company: ["About", "Blog", "Careers", "Press"],
  Resources: ["Documentation", "Help Center", "Community", "Contact"],
};

const SOCIALS = [
  { label: "Twitter", emoji: "🔗" },
  { label: "LinkedIn", emoji: "💼" },
  { label: "Facebook", emoji: "📘" },
  { label: "Instagram", emoji: "📸" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <span className="text-2xl font-extrabold text-white">DigiTools</span>
            <p className="text-gray-400 text-sm mt-3 leading-relaxed max-w-xs">
              The all-in-one digital tools platform trusted by 50,000+ creators, marketers, and businesses worldwide.
            </p>
            <div className="flex gap-3 mt-5">
              {SOCIALS.map(({ label, emoji }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-purple-600 flex items-center justify-center transition-colors text-base"
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-bold text-sm mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">© 2025 DigiTools. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookies"].map((link) => (
              <a key={link} href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

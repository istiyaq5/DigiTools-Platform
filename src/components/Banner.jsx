import ImgPlay from "../assets/Play.png";
import bannerPng from "../assets/banner.png";
export default function Banner() {
  return (
    <section className="relative bg-gradient-to- from-white via-purple-50 to-indigo-50 overflow-hidden py-16 lg:py-24">
      {/* Background blobs */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-purple-200 rounded-full opacity-30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-200 rounded-full opacity-20 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <span className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            New: AI-Powered Tools Available
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight mb-5">
            Supercharge Your
            <br />
            <span className="text-purple-600">Digital Workflow</span>
          </h1>

          <p className="text-gray-500 text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore
            Products
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              href="#main-section"
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-7 py-3.5 rounded-full transition-colors shadow-lg shadow-purple-200"
            >
              Explore Products
            </a>
            <a
              href="#steps"
              className="flex items-center gap-2 border border-gray-300 hover:border-purple-400 text-gray-700 font-semibold px-7 py-3.5 rounded-full transition-colors"
            >
                <img src={ImgPlay} alt="Play Icon" />
              How It Works
            </a>
          </div>
        </div>

        {/* Right – Illustration card */}
        <img src={bannerPng} alt="Banner Illustration" />
      </div>
    </section>
  );
}

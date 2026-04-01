const STEPS = [
  {
    num: "01",
    icon: "👤",
    title: "Create Account",
    desc: "Sign up in seconds with your email or Google account. No credit card required to get started.",
  },
  {
    num: "02",
    icon: "📦",
    title: "Choose Products",
    desc: "Browse our library of 200+ digital tools and pick the ones that perfectly fit your workflow.",
  },
  {
    num: "03",
    icon: "🚀",
    title: "Start Creating",
    desc: "Jump right in and start building, writing, and designing with professional-grade tools instantly.",
  },
];

export default function Steps() {
  return (
    <section id="steps" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="inline-block bg-purple-100 text-purple-700 text-xs font-bold px-4 py-1.5 rounded-full mb-3 uppercase tracking-widest">
            How It Works
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3">
            Get Started In 3 Steps
          </h2>
          <p className="text-gray-500 max-w-md mx-auto">
            You're just a few minutes away from unlocking your most productive digital toolkit ever.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Connector dashes */}
          <div className="hidden md:flex absolute top-14 left-0 right-0 items-center justify-center px-20 pointer-events-none">
            <div className="flex-1 border-t-2 border-dashed border-purple-200" />
            <div className="flex-1 border-t-2 border-dashed border-purple-200" />
          </div>

          {STEPS.map((step, i) => (
            <div key={step.title} className="flex flex-col items-center text-center relative">
              {/* Step icon */}
              <div className="relative mb-6 z-10">
                <div className="w-20 h-20 rounded-2xl bg-purple-50 border-2 border-purple-100 flex items-center justify-center text-3xl shadow-md">
                  {step.icon}
                </div>
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-purple-600 text-white text-xs font-extrabold flex items-center justify-center shadow">
                  {i + 1}
                </span>
              </div>
              <h3 className="text-lg font-extrabold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

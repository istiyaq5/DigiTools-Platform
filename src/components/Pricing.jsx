const PLANS = [
  {
    name: "Starter",
    price: "$0",
    period: "/month",
    desc: "Perfect for getting started",
    cardClass: "bg-white border border-gray-200",
    textClass: "text-gray-900",
    subClass: "text-gray-400",
    featureClass: "text-gray-600",
    featureIconClass: "text-purple-500",
    btnClass: "border-2 border-purple-600 text-purple-600 hover:bg-purple-50",
    btnText: "Get Started Free",
    highlight: false,
    features: [
      "Access to 5 free tools",
      "100 generations/month",
      "Basic templates",
      "Email support",
    ],
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    desc: "Most popular for professionals",
    cardClass: "bg-purple-600",
    textClass: "text-white",
    subClass: "text-purple-200",
    featureClass: "text-purple-100",
    featureIconClass: "text-white",
    btnClass: "bg-white text-purple-700 hover:bg-purple-50 font-extrabold",
    btnText: "Start Pro Trial",
    highlight: true,
    features: [
      "Access to all 200+ tools",
      "Unlimited generations",
      "Priority support",
      "Advanced analytics",
      "Team collaboration",
      "API access",
    ],
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "/tech",
    desc: "For large teams & agencies",
    cardClass: "bg-white border border-gray-200",
    textClass: "text-gray-900",
    subClass: "text-gray-400",
    featureClass: "text-gray-600",
    featureIconClass: "text-purple-500",
    btnClass: "border-2 border-purple-600 text-purple-600 hover:bg-purple-50",
    btnText: "Contact Sales",
    highlight: false,
    features: [
      "Everything in Pro",
      "Custom integrations",
      "Dedicated manager",
      "SLA guarantee",
      "Custom branding",
      "SSO / SAML",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="inline-block bg-purple-100 text-purple-700 text-xs font-bold px-4 py-1.5 rounded-full mb-3 uppercase tracking-widest">
            Pricing
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-500 max-w-md mx-auto">
            Choose the plan that's right for you — no surprises, no hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 flex flex-col transition-all ${plan.cardClass} ${
                plan.highlight
                  ? "shadow-2xl shadow-purple-300 md:scale-105 z-10"
                  : "shadow-md"
              }`}
            >
              {plan.highlight && (
                <div className="text-center mb-4">
                  <span className="bg-white text-purple-700 text-xs font-extrabold px-3 py-1.5 rounded-full shadow-sm">
                    ⭐ Most Popular
                  </span>
                </div>
              )}
              <h3 className={`text-xl font-extrabold mb-1 ${plan.textClass}`}>{plan.name}</h3>
              <p className={`text-sm mb-5 ${plan.subClass}`}>{plan.desc}</p>
              <div className="mb-6">
                <span className={`text-4xl font-black ${plan.textClass}`}>{plan.price}</span>
                <span className={`text-sm ${plan.subClass}`}>{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className={`flex items-center gap-2.5 text-sm ${plan.featureClass}`}>
                    <svg
                      className={`w-4 h-4 flex-shrink-0 ${plan.featureIconClass}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-full text-sm font-bold transition-colors ${plan.btnClass}`}>
                {plan.btnText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

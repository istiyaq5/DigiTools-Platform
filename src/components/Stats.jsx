const STATS = [
  { value: "50K+", label: "Active Users" },
  { value: "200+", label: "Premium Tools" },
  { value: "4.9", label: "Rating" },
];

export default function Stats() {
  return (
    <section className="bg-purple-600">
      <div className="max-w-4xl mx-auto px-6 py-10 grid grid-cols-3 divide-x divide-purple-500">
        {STATS.map(({ value, label }) => (
          <div key={label} className="flex flex-col items-center py-2 px-4">
            <span className="text-3xl lg:text-4xl font-extrabold text-white">{value}</span>
            <span className="text-purple-200 text-sm mt-1 text-center">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

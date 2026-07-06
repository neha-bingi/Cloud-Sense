export default function Stats() {
  const stats = [
    { value: "4+", label: "Cloud Providers" },
    { value: "95%", label: "Estimation Accuracy" },
    { value: "30%", label: "Potential Savings" },
    { value: "24/7", label: "AI Analysis" },
  ];

  return (
    <section className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-16 md:mt-20">

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

        {stats.map((stat) => (
          <div
            key={stat.label}
            className="w-full bg-white border border-slate-200 rounded-2xl p-5 md:p-6 text-center shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-pink-600">
              {stat.value}
            </h2>

            <p className="mt-2 text-sm sm:text-base text-slate-600">
              {stat.label}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}
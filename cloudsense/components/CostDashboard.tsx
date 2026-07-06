export default function CostDashboard() {
  const providers = [
    {
      name: "☁️ AWS",
      cost: "$520/mo",
      color: "text-orange-500",
    },
    {
      name: "🔷 Azure",
      cost: "$610/mo",
      color: "text-blue-500",
    },
    {
      name: "🌈 Google Cloud",
      cost: "$480/mo",
      color: "text-green-500",
    },
  ];

  return (
    <section className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-16 md:mt-24">

      <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-900">
        Multi-Cloud Cost Intelligence
      </h2>

      <p className="text-center text-slate-600 mt-4 text-sm sm:text-base">
        AI-powered cost comparison across major cloud providers
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

        {providers.map((provider) => (
          <div
            key={provider.name}
            className="w-full bg-white border border-slate-200 rounded-2xl p-5 md:p-6 shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            <h3 className={`text-xl sm:text-2xl font-bold ${provider.color}`}>
              {provider.name}
            </h3>

            <p className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900">
              {provider.cost}
            </p>

            <p className="mt-2 text-sm sm:text-base text-slate-500">
              Estimated monthly cost
            </p>
          </div>
        ))}

      </div>

      <div className="mt-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl p-6 md:p-8 text-white">

        <h3 className="text-2xl sm:text-3xl font-bold">
          Recommended Provider
        </h3>

        <p className="mt-3 text-lg sm:text-xl">
          Google Cloud Platform
        </p>

        <p className="mt-2 text-sm sm:text-base">
          Estimated savings: 22%
        </p>

      </div>

    </section>
  );
}
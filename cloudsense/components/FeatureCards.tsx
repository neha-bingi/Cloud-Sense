export default function FeatureCards() {
  const features = [
    {
      title: "Cost Estimation",
      description: "Predict cloud costs before deployment",
    },
    {
      title: "Cloud Comparison",
      description: "Compare AWS, Azure and GCP pricing",
    },
    {
      title: "Architecture Planning",
      description: "Generate optimized cloud designs",
    },
    {
      title: "AI Optimization",
      description: "Reduce infrastructure spending",
    },
  ];

  return (
    <section className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {features.map((feature) => (
          <div
            key={feature.title}
            className="w-full bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-pink-600">
              {feature.title}
            </h3>

            <p className="text-slate-500 mt-3 text-sm sm:text-base leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}
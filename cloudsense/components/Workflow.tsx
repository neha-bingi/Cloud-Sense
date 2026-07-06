export default function Workflow() {
  const steps = [
    {
      title: "Describe",
      description: "Enter project requirements in natural language",
    },
    {
      title: "Analyze",
      description: "AI extracts cloud resources and workload patterns",
    },
    {
      title: "Compare",
      description: "Multi-cloud pricing comparison across providers",
    },
    {
      title: "Optimize",
      description: "Receive architecture and cost-saving recommendations",
    },
  ];

  return (
    <section className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-16 md:mt-24">

      <h2 className="text-3xl sm:text-4xl font-bold text-center text-pink-600">
        How CloudSense Works
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-10 md:mt-12">

        {steps.map((step, index) => (
          <div
            key={step.title}
            className="w-full bg-white border border-slate-200 rounded-2xl p-5 md:p-6 shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >

            <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center font-bold text-pink-600">
              {index + 1}
            </div>

            <h3 className="mt-4 text-lg sm:text-xl font-semibold text-slate-900">
              {step.title}
            </h3>

            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              {step.description}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}
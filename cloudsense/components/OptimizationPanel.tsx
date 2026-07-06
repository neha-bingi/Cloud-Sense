export default function OptimizationPanel() {
  const suggestions = [
    {
      title: "Reduce AI Inference Costs",
      saving: "₹11000/month",
      description:
        "Use serverless inference endpoints instead of always-on GPU instances.",
    },
    {
      title: "Optimize Image Storage",
      saving: "₹4000/month",
      description:
        "Compress images and move infrequently accessed files to cold storage.",
    },
    {
      title: "Add CDN Layer",
      saving: "₹2500/month",
      description:
        "Serve static assets through a CDN to reduce bandwidth costs.",
    },
  ];

  return (
    <div className="mt-10 bg-white rounded-3xl shadow-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      <h2 className="text-xl md:text-2xl font-bold mb-6 text-center text-slate-700">
        AI Optimization Recommendations
      </h2>

      <div className="space-y-4">

        {suggestions.map((item) => (
          <div
            key={item.title}
            className=" border border-slate-200 rounded-2xl p-4 md:p-5 hover:shadow-md transition-all"
          >

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">

              <h3 className="font-semibold text-base md:text-lg text-slate-700">
                {item.title}
              </h3>

              <span className="self-start sm:self-auto bg-green-100 text-green-700 px-3 py-1 rounded-full text-xl font-medium">
                Save {item.saving}
              </span>

            </div>

            <p className="text-slate-600 mt-3 text-l md:text-base leading-relaxed">
              {item.description}
            </p>

          </div>
        ))}

      </div>

      <div className="mt-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl p-5 md:p-6 text-center">

        <h3 className="text-lg md:text-xl font-bold">
          Total Potential Savings
        </h3>

        <p className="text-2xl md:text-3xl font-bold mt-2">
          ₹17000/month
        </p>

      </div>

    </div>
  );
}
export default function CloudComparison() {
  return (
    <section className="mt-24 w-full">

      <div className="text-center">

        <h2 className="text-4xl font-bold text-slate-800">
          Cloud Provider Comparison
        </h2>

        <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
          CloudSense intelligently evaluates AWS, Azure and Google Cloud across
          cost, scalability, AI capabilities, security and workload suitability
          before recommending the best platform for your application.
        </p>

      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-12">

        {/* AWS */}

        <div className="bg-white rounded-3xl shadow-lg p-8 border border-slate-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

          <h3 className="text-3xl font-bold text-orange-500">
            ☁️ AWS
          </h3>

          <p className="mt-5 font-semibold text-slate-800">
            Best For
          </p>

          <ul className="mt-4 space-y-3 text-slate-700">
            <li>✔ Enterprise-scale applications</li>
            <li>✔ Mature cloud ecosystem</li>
            <li>✔ Advanced AI & ML services</li>
            <li>✔ Global infrastructure</li>
          </ul>

        </div>

        {/* Azure */}

        <div className="bg-white rounded-3xl shadow-lg p-8 border border-slate-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

          <h3 className="text-3xl font-bold text-blue-600">
            🔷 Azure
          </h3>

          <p className="mt-5 font-semibold text-slate-800">
            Best For
          </p>

          <ul className="mt-4 space-y-3 text-slate-700">
            <li>✔ Microsoft ecosystem</li>
            <li>✔ Hybrid cloud solutions</li>
            <li>✔ Enterprise security</li>
            <li>✔ Compliance-driven workloads</li>
          </ul>

        </div>

        {/* GCP */}

        <div className="bg-white rounded-3xl shadow-lg p-8 border border-slate-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

          <h3 className="text-3xl font-bold text-green-600">
            🌈 Google Cloud
          </h3>

          <p className="mt-5 font-semibold text-slate-800">
            Best For
          </p>

          <ul className="mt-4 space-y-3 text-slate-700">
            <li>✔ AI & Machine Learning</li>
            <li>✔ Big Data Analytics</li>
            <li>✔ Cloud-native applications</li>
            <li>✔ High-performance containers</li>
          </ul>

        </div>

      </div>

      <div className="mt-12 bg-white rounded-3xl shadow-lg border border-slate-200 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

        <h3 className=" text-center text-3xl font-bold text-slate-800">
            CloudSense Compares More Than Price
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">

          <div className="bg-pink-50 rounded-xl p-4 text-center font-semibold text-slate-700">
                💰 Cost Efficiency
          </div>
          <div className="bg-purple-50 rounded-xl p-4 text-center font-semibold text-slate-700">
                📈 Scalability
          </div>
          <div className="bg-sky-50 rounded-xl p-4 text-center font-semibold text-slate-700">
                🤖 AI Readiness
          </div>
          <div className="bg-green-50 rounded-xl p-4 text-center font-semibold text-slate-700">
                🛡 Security
          </div>
          <div className="bg-orange-50 rounded-xl p-4 text-center font-semibold text-slate-700">
                🏗 Architecture Fit
          </div>
          <div className="bg-indigo-50 rounded-xl p-4 text-center font-semibold text-slate-700">
                ⚡ Performance
          </div>

        </div>

        <p className="mt-8 text-lg text-slate-600 max-w-3xl mx-auto leading-8 text-center">
          Every recommendation is generated after analyzing your application's
          unique requirements, not from fixed pricing alone.
        </p>

      </div>

    </section>
  );
}
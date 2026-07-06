type Props = {
  provider?: string;
};

export default function ArchitectureRecommendation({
  provider,
}: Props) {
  return (
    <div className="mt-10 bg-white rounded-3xl shadow-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      <h2 className="text-xl md:text-2xl font-bold mb-6 text-slate-800 text-center">
        Recommended Architecture
      </h2>

      {provider === "AWS" && (
        <div className="space-y-3 text-slate-700 text-sm sm:text-base">
          <div className="bg-orange-50 rounded-xl p-3">🌐 Route 53</div>
          <div className="bg-orange-50 rounded-xl p-3">⚖️ Application Load Balancer</div>
          <div className="bg-orange-50 rounded-xl p-3">🖥 EC2</div>
          <div className="bg-orange-50 rounded-xl p-3">🗄 RDS MySQL</div>
          <div className="bg-orange-50 rounded-xl p-3">📦 S3 Storage</div>
        </div>
      )}

      {provider === "Azure" && (
        <div className="space-y-3 text-slate-700 text-sm sm:text-base">
          <div className="bg-blue-50 rounded-xl p-3">🌐 Azure Front Door</div>
          <div className="bg-blue-50 rounded-xl p-3">⚖️ Azure Load Balancer</div>
          <div className="bg-blue-50 rounded-xl p-3">🖥 Azure App Service</div>
          <div className="bg-blue-50 rounded-xl p-3">🗄 Azure SQL Database</div>
          <div className="bg-blue-50 rounded-xl p-3">📦 Azure Blob Storage</div>
        </div>
      )}

      {provider === "GCP" && (
        <div className="space-y-3 text-slate-700 text-sm sm:text-base">
          <div className="bg-green-50 rounded-xl p-3">🌐 Cloud Load Balancing</div>
          <div className="bg-green-50 rounded-xl p-3">🖥 Cloud Run</div>
          <div className="bg-green-50 rounded-xl p-3">🗄 Cloud SQL</div>
          <div className="bg-green-50 rounded-xl p-3">📦 Cloud Storage</div>
          <div className="bg-green-50 rounded-xl p-3">🤖 Vertex AI</div>
        </div>
      )}

      {!provider && (
        <p className="text-center text-slate-500 text-sm md:text-base">
          Analyze a project to view the recommended cloud architecture.
        </p>
      )}

    </div>
  );
}
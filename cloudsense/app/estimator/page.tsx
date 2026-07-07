"use client";

import { useEffect, useState } from "react";
import jsPDF from "jspdf";
import CostChart from "@/components/CostChart";
import ArchitectureRecommendation from "@/components/ArchitectureRecommendation";
import OptimizationPanel from "@/components/OptimizationPanel";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";

interface AnalysisResult {
  project_type: string;
  users: number;
  storage: string;
  database: string;
  ai_required: boolean;

  recommended_provider: "AWS" | "Azure" | "GCP";
  lowest_cost_provider: "AWS" | "Azure" | "GCP";

  aws_cost: number;
  azure_cost: number;
  gcp_cost: number;

  aws_score: number;
  azure_score: number;
  gcp_score: number;

  confidence: number;
  savings: number;

  summary: string;
  recommendation_reason: string;
}

export default function EstimatorPage() {
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
 const [result, setResult] = useState<AnalysisResult | null>(null);
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [analysisId, setAnalysisId] = useState("");
  const [generatedAt, setGeneratedAt] = useState("");
  const [history, setHistory] = useState<any[]>([]);

  const loadingMessages = [
    "🔍 Understanding your project...",
    "🧠 Identifying cloud services...",
    "☁️ Comparing AWS, Azure & GCP...",
    "💰 Estimating monthly costs...",
    "📊 Building recommendations...",
  ];

  const [loadingMessage, setLoadingMessage] = useState(
    loadingMessages[0]
  );

  const analyzeProject = async () => {
           setShowResult(false);
           setError("");
           setLoading(true);
        let index = 0;

        const interval = setInterval(() => {
          index = (index + 1) % loadingMessages.length;
          setLoadingMessage(loadingMessages[index]);
         }, 1200);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/analyze`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          description,
        }),
      });

      if (!response.ok) {
          throw new Error("Server error");
      }
      const data = await response.json();

      setResult(data);
      setGeneratedAt(new Date().toLocaleString());
      const id =
         "CS-" +
        new Date().toISOString().slice(0,10).replace(/-/g,"") +
        "-" +
        Math.floor(1000 + Math.random() * 9000);

      setAnalysisId(id);

      setHistory((prev) => [
       {
          description,
          provider: data.recommended_provider,
          cost:
            data.aws_cost +
              "/" +
            data.azure_cost +
              "/" +
            data.gcp_cost,
            time: new Date().toLocaleTimeString(),
        },
             ...prev.slice(0, 4),
      ]);

      setShowResult(true);
           } catch (error) {
              console.error(error);

              setError(
            "Unable to analyze your project right now. Please try again."
            );
          }

          clearInterval(interval);
          setLoading(false);
      };
      const downloadReport = () => {
      if (!result) return;

        const doc = new jsPDF();

          doc.setFontSize(22);
          doc.text("CloudSense Analysis Report", 20, 20);

          doc.setFontSize(12);

          doc.text(`Project Description:`, 20, 40);
          doc.text(description, 20, 48);

          doc.text(`Recommended Provider: ${result.recommended_provider}`, 20, 70);

          doc.text(`Estimated Users: ${result.users}`, 20, 80);

          doc.text(`Database: ${result.database}`, 20, 90);

          doc.text(`Storage: ${result.storage}`, 20, 100);

          doc.text(`AWS Cost: Rs. ${result.aws_cost}/month`, 20, 120);

          doc.text(`Azure Cost: Rs. ${result.azure_cost}/month`, 20, 130);

          doc.text(`GCP Cost: Rs. ${result.gcp_cost}/month`, 20, 140);
          
          doc.text(`Estimated Savings: ${result.savings}%`, 20, 150);

          doc.text("Project Summary:", 20, 170);

          doc.text(doc.splitTextToSize(result.summary, 170), 20, 180);

          doc.save("CloudSense_Report.pdf");

          
    };

    const getCostBreakdown = (total: number) => {
  return {
    compute: Math.round(total * 0.40),
    storage: Math.round(total * 0.20),
    database: Math.round(total * 0.15),
    networking: Math.round(total * 0.10),
    ai: Math.round(total * 0.15),
  };
  };

  return (

    <main className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-sky-50 p-4 sm:p-6 md:p-10">

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
        Cloud Cost Estimator
      </h1>

      <p className="text-center text-slate-600 mt-4">
        Describe your application and receive AI-powered cloud insights.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-12">

        {/* Project Description */}
        <div className="bg-white rounded-3xl p-6 shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">

          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Project Description
          </h2>

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full h-48 md:h-64 border border-slate-200 rounded-xl p-4 resize-none text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
            placeholder="Describe your application (e.g., users, features, storage, AI requirements...)"
          />

      <div className="mt-4">
        <p className="text-sm text-slate-500 mb-3">
                       Try an example:
        </p>

        <div className="flex flex-wrap gap-2">

        <button
            type="button"
            onClick={() =>
            setDescription(
                   "Food delivery application with AI chatbot, image uploads and real-time order tracking."
               )
               }
            className="px-3 py-2 bg-pink-100 text-pink-700 rounded-lg text-sm hover:bg-pink-200 transition"
            >
                 🍔 Food Delivery
        </button>

          <button
            type="button"
            onClick={() =>
            setDescription(
                "E-commerce website with payments, inventory management and customer accounts."
              )
              }
            className="px-3 py-2 bg-blue-100 text-blue-700 rounded-lg text-sm hover:bg-blue-200 transition"
              >
                  🛒 E-Commerce
        </button>

        <button
            type="button"
            onClick={() =>
            setDescription(
                "Hospital management system with patient records, appointments and AI diagnosis assistant."
            )
              }
            className="px-3 py-2 bg-green-100 text-green-700 rounded-lg text-sm hover:bg-green-200 transition"
          >
                  🏥 Healthcare
        </button>

          <button
          type="button"
          onClick={() =>
          setDescription(
                 "Learning management platform with online classes, quizzes and student analytics."
             )
             }
             className="px-3 py-2 bg-purple-100 text-purple-700 rounded-lg text-sm hover:bg-purple-200 transition"
            >
              📚 Education
           </button>

      </div>
      </div>

          <button
            onClick={analyzeProject}
            disabled={loading}
            className={`mt-6 w-full py-3 md:py-4 rounded-xl font-semibold text-sm md:text-base transition-all duration-300 ${
            loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-gradient-to-r from-pink-500 to-purple-500 hover:scale-105 text-white"
            }`}
            >
               {loading ? "Analyzing..." : "Analyze Project"}
          </button>

          {loading && (
          <div className="mt-6 flex flex-col items-center">

          <div className="w-10 h-10 border-4 border-pink-200 border-t-pink-600 rounded-full animate-spin"></div>

          <p className="mt-4 text-pink-600 font-medium">
                {loadingMessage}
          </p>

          <p className="text-sm text-slate-500 mt-1">
             Estimating costs across AWS, Azure and GCP
          </p>

          </div>
          )}
          {error && (
            <div className="mt-6 rounded-xl bg-red-100 border border-red-300 p-4 text-red-700">
             {error}
            </div>
          )}
          </div>
       
        {/* AI Analysis */}
        <div className="bg-white rounded-3xl p-6 shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">

          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            AI Analysis
          </h2>
          <div className="bg-slate-50 rounded-xl p-4 mb-6">

            <div className="flex justify-between">

            <div>

            <p className="text-l text-slate-700">
               Analysis ID
            </p>

            <p className=" text-xl font-semibold text-pink-800">
               {analysisId || "-"}
            </p>

            </div>

            <div className="text-right">

            <p className="text-l text-slate-700">
                 Generated
            </p>

           <p className="text-xl text-slate-700">
                {generatedAt || "-"}
          </p>
        </div>

      </div>

      </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

  <div className="bg-slate-50 rounded-xl p-4">
    <p className="text-l text-slate-700">👥 Estimated Users</p>
    <p className="text-xl font-bold text-slate-700">{result?.users ?? "-"}</p>
  </div>

  <div className="bg-slate-50 rounded-xl p-4">
    <p className="text-l text-slate-700">🗄 Storage</p>
    <p className="text-xl font-bold text-slate-700">{result?.storage ?? "-"}</p>
  </div>

  <div className="bg-slate-50 rounded-xl p-4">
    <p className="text-l text-slate-700">🗃 Database</p>
    <p className="text-xl font-bold text-slate-700">{result?.database ?? "-"}</p>
  </div>

  <div className="bg-slate-50 rounded-xl p-4">
    <p className="text-l text-slate-700">🤖 AI Required</p>
    <p className="text-xl font-bold text-slate-700">
      {result ? (result.ai_required ? "Yes" : "No") : "-"}
    </p>
  </div>

</div>
        </div>

      </div>

      {showResult && (
        <>

          {/* Cost Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

            <div className="bg-white rounded-3xl shadow-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">




          <h3 className="text-orange-500 font-bold text-xl">
            AWS
          </h3>

          {result && (() => {

          const cost = getCostBreakdown(result.aws_cost);

        return (

        <>

        <div className="space-y-2 mt-4 text-slate-700">

        <div className="flex justify-between">
        <span>Compute</span>
        <span>₹{cost.compute}</span>
        </div>

        <div className="flex justify-between">
        <span>Storage</span>
        <span>₹{cost.storage}</span>
        </div>

        <div className="flex justify-between">
        <span>Database</span>
        <span>₹{cost.database}</span>
        </div>

        <div className="flex justify-between">
        <span>Networking</span>
        <span>₹{cost.networking}</span>
        </div>

        <div className="flex justify-between">
        <span>AI Services</span>
        <span>₹{cost.ai}</span>
        </div>

        <hr className="my-3"/>

        <div className="flex justify-between font-bold text-lg">

        <span>Total</span>

        <span>₹{result.aws_cost}</span>

        </div>

        </div>

        </>

        );

        })()}

        </div>
        <div className="bg-white rounded-3xl shadow-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

        <h3 className="text-orange-500 font-bold text-xl">
          Azure
        </h3>

        {result && (() => {

        const cost = getCostBreakdown(result.azure_cost);

        return (

        <>

      <div className="space-y-2 mt-4 text-slate-700">

      <div className="flex justify-between">
      <span>Compute</span>
      <span>₹{cost.compute}</span>
      </div>

      <div className="flex justify-between">
      <span>Storage</span>
      <span>₹{cost.storage}</span>
      </div>

      <div className="flex justify-between">
      <span>Database</span>
      <span>₹{cost.database}</span>
      </div>

      <div className="flex justify-between">
      <span>Networking</span>
      <span>₹{cost.networking}</span>
      </div>

      <div className="flex justify-between">
      <span>AI Services</span>
      <span>₹{cost.ai}</span>
      </div>

        <hr className="my-3"/>

        <div className="flex justify-between font-bold text-lg">

        <span>Total</span>

        <span>₹{result.azure_cost}</span>

      </div>

      </div>

      </>

      );

    })()}

    </div>

    <div className="bg-white rounded-3xl shadow-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

<h3 className="text-orange-500 font-bold text-xl">
GCP
</h3>

{result && (() => {

const cost = getCostBreakdown(result.gcp_cost);

return (

<>

<div className="space-y-2 mt-4 text-slate-700">

<div className="flex justify-between">
<span>Compute</span>
<span>₹{cost.compute}</span>
</div>

<div className="flex justify-between">
<span>Storage</span>
<span>₹{cost.storage}</span>
</div>

<div className="flex justify-between">
<span>Database</span>
<span>₹{cost.database}</span>
</div>

<div className="flex justify-between">
<span>Networking</span>
<span>₹{cost.networking}</span>
</div>

<div className="flex justify-between">
<span>AI Services</span>
<span>₹{cost.ai}</span>
</div>

<hr className="my-3"/>

<div className="flex justify-between font-bold text-lg">

<span>Total</span>

<span>₹{result.gcp_cost}</span>

</div>

</div>

</>

);

})()}

</div>

          </div>

          {/* AI Project Summary */}
          <div className="bg-white rounded-3xl shadow-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <h2 className="text-2xl font-bold mb-4 text-slate-800">
              AI Project Summary
            </h2>

           <div className="space-y-3 text-sm md:text-base text-slate-700 break-words">

            <p>{result?.summary}</p>

               <div className="border-t pt-4 mt-4">

              <p><strong>Recommended Provider:</strong> {result?.recommended_provider}</p>

              <p><strong>Database:</strong> {result?.database}</p>

              <p><strong>Storage:</strong> {result?.storage}</p>

              <p><strong>Estimated Users:</strong> {result?.users}</p>

              </div>

          </div>
          </div>

          {/* Recommended Provider */}
         {/* Best Overall Choice */}
<div className="mt-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl p-6 md:p-8 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">

  <h2 className="text-2xl md:text-3xl font-bold">
    🏆 Best Overall Choice
  </h2>

  <p className="mt-5 text-3xl font-bold break-words">
    {result?.recommended_provider}
  </p>

  <div className="mt-4 inline-block bg-white/20 px-4 py-2 rounded-full">
    Confidence Score: {result?.confidence}%
  </div>

  <p className="mt-6 leading-7 text-white/90">
    {result?.recommendation_reason}
  </p>

  <p className="mt-6 text-lg font-semibold">
    Estimated Savings: {result?.savings}%
  </p>

</div>

{/* Budget-Friendly Option */}
{result?.recommended_provider !== result?.lowest_cost_provider ? (

  <div className="mt-8 bg-white rounded-3xl shadow-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

    <h2 className="text-2xl font-bold text-green-600">
      💰 Budget-Friendly Option
    </h2>

    <p className="mt-4 text-2xl font-bold text-slate-700">
      {result?.lowest_cost_provider}
    </p>

    <p className="text-l mt-3 text-slate-600">
      Estimated Monthly Cost
    </p>

    <p className="text-3xl font-bold mt-2 text-slate-900">
      ₹{
        result?.lowest_cost_provider === "AWS"
          ? result?.aws_cost
          : result?.lowest_cost_provider === "Azure"
          ? result?.azure_cost
          : result?.gcp_cost
      }/month
    </p>

    <p className="text-l mt-5 text-slate-600">
      This provider offers the lowest estimated monthly infrastructure cost.
      Choose it if minimizing cloud spending is your highest priority.
    </p>

  </div>

) : (

  <div className="mt-8 bg-green-50 border border-green-200 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">

    <h2 className="text-2xl font-bold text-green-700">
      ✅ Best Overall & Lowest Cost
    </h2>

    <p className="mt-4 text-slate-700 leading-7">
      <strong>{result?.recommended_provider}</strong> is both the most suitable
      provider for your workload and the lowest estimated monthly cost, making
      it the ideal overall choice.
    </p>

  </div>

)}
          <div className="mt-6 flex justify-center">
              <button
                onClick={downloadReport}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 hover:scale-105"
                >
                    📄 Download PDF Report
              </button>
        </div>

          <div className="mt-10">
            <CostChart result={result} />
          </div>
          <div className="mt-10">
            <ArchitectureRecommendation
                provider={result?.recommended_provider}
            />
          </div>
          <div className="mt-10">
            <ArchitectureDiagram
                provider={result?.recommended_provider}
            />
          </div>

          <div className="mt-10 mb-16">
            <OptimizationPanel />
          </div>

        </>
          )}
            {history.length > 0 && (
               <div className="mt-10 bg-white rounded-3xl shadow-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                <h2 className="text-2xl font-bold mb-6 text-slate-700">
                      Recent Analysis
                </h2>

                <div className="space-y-4">

                {history.map((item, index) => (
                <div
                   key={index}
                   className="border rounded-xl p-4 hover:bg-slate-50 transition"
                   >
                  <p className="text-xl font-semibold text-slate-700">
                         {item.description.slice(0, 60)}...
                  </p>

                  <p className="text-xl text-slate-600 mt-2">
                         Provider: {item.provider}
                  </p>

                    <p className="text-l text-slate-500">
                        {item.time}
                  </p>
            </div>
          ))}

        </div>

      </div>
    )}

    </main>
  );
}
import Link from "next/link";
import FeatureCards from "@/components/FeatureCards";
import Navbar from "@/components/Navbar";
import Stats from "@/components/Stats";
import Workflow from "@/components/Workflow";
import CloudComparison from "@/components/CloudComparison";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-sky-50 text-slate-900 overflow-x-hidden">

      <Navbar />

      <div className="fixed top-20 left-0 md:left-10 w-56 h-56 md:w-96 md:h-96 bg-pink-300 rounded-full blur-3xl opacity-20 -z-10"></div>

      <div className="fixed bottom-20 right-0 md:right-10 w-56 h-56 md:w-96 md:h-96 bg-sky-300 rounded-full blur-3xl opacity-20 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 flex flex-col items-center">

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent text-center">
          CloudSense
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl text-center">
          Agentic Multi-Cloud Cost Intelligence Platform
        </p>

        <p className="mt-4 text-sm sm:text-base text-slate-600 text-center">
          Know Before You Build. Optimize Before You Deploy.
        </p>

        <div className="mt-6 px-4 py-2 rounded-full bg-pink-100 text-pink-600 text-xs sm:text-sm font-medium text-center">
          Agentic AI • Multi-Cloud • Cost Intelligence
        </div>

        <Link
            href="/estimator"
            className="mt-10 w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold px-8 py-3 md:py-4 rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
                 🚀 Try CloudSense
        </Link>

        <section id="features">
          <FeatureCards />
        </section>

        <Stats />

        <section id="about">
          <Workflow />
        </section>
        
        <CloudComparison />

      

      </div>

      <Footer />

    </main>
  );
}
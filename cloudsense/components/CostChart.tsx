"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type CostChartProps = {
  result: any;
};

const COLORS = [
  "#ec4899",
  "#8b5cf6",
  "#3b82f6",
  "#14b8a6",
  "#f59e0b",
];

export default function CostChart({ result }: CostChartProps)  {
  let compute = 30;
  let storage = 15;
  let database = 20;
  let networking = 15;
  let ai = 0;

  if (result) {

  // Users
    if (result.users > 50000) {
      compute += 20;
      networking += 10;
    } else if (result.users > 10000) {
       compute += 10;
      networking += 5;
    }

  // Storage
    switch (result.storage) {
      case "Medium":
        storage += 10;
        break;

      case "High":
        storage += 20;
        break;

      case "Very High":
        storage += 30;
        break;
    }

  // AI
    if (result.ai_required) {
      ai = 20;
      compute += 10;
    }

  // Database
    if (
       result.database?.includes("SQL") ||
       result.database?.includes("Postgre") ||
       result.database?.includes("MySQL")
    ) {
        database += 10;
    }
  }

    const data = [
      { name: "Compute", value: compute },
      { name: "Storage", value: storage },
      { name: "Database", value: database },
      { name: "Networking", value: networking },
      { name: "AI Services", value: ai },
    ];
  
  return (
    <div className="mt-10 bg-white rounded-3xl shadow-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      <h2 className="text-xl md:text-2xl font-bold mb-6 text-center text-slate-700">
        Cost Breakdown
      </h2>

      <div className="w-full min-h-[350px] h-[350px]">
          
          <ResponsiveContainer width="100%" height="100%">

          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius="70%"
              label
              isAnimationActive
            >
              {data.map((_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>

            <Tooltip />

            <Legend
              verticalAlign="bottom"
              align="center"
            />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}
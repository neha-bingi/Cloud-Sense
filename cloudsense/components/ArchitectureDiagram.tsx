import type { ReactNode } from "react";
type Props = {
  provider?: string;
};

const VerticalConnector = () => (
  <div className="w-0.5 h-6 bg-gray-400"></div>
);

const BranchConnector = () => (
  <div className="relative w-56 h-8">
    {/* Vertical line from parent */}
    <div className="absolute left-1/2 top-0 -translate-x-1/2 w-0.5 h-4 bg-gray-400"></div>

    {/* Horizontal split */}
    <div className="absolute left-6 right-6 top-4 h-0.5 bg-gray-400"></div>

    {/* Left vertical */}
    <div className="absolute left-6 top-4 w-0.5 h-4 bg-gray-400"></div>

    {/* Right vertical */}
    <div className="absolute right-6 top-4 w-0.5 h-4 bg-gray-400"></div>
  </div>
);

const Box = ({
  children,
  color,
}: {
  children: ReactNode;
  color: string;
}) => (
  <div className={`${color} px-5 py-2 rounded-xl shadow`}>
    {children}
  </div>
);

export default function ArchitectureDiagram({ provider }: Props) {
  if (!provider) return null;

  return (
    <div className="mt-10 bg-white rounded-3xl shadow-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      <h2 className="text-2xl font-bold text-center mb-8 text-slate-700">
        Cloud Architecture Diagram
      </h2>

      {/* AWS */}

      {provider === "AWS" && (
        <div className="flex flex-col items-center">

          <Box color="bg-blue-100 text-slate-700">👤 Users</Box>

          <VerticalConnector />

          <Box color="bg-orange-100 text-slate-700">🌐 Route 53</Box>

          <VerticalConnector />

          <Box color="bg-orange-100 text-slate-700">
            ⚖️ Application Load Balancer
          </Box>

          <VerticalConnector />

          <Box color="bg-orange-100 text-slate-700">🖥 EC2</Box>

          <BranchConnector />

          <div className="flex justify-center gap-20 w-full">
            <Box color="bg-orange-100 text-slate-700">🗄 RDS</Box>
            <Box color="bg-orange-100 text-slate-700">📦 S3 Storage</Box>
          </div>

        </div>
      )}

      {/* Azure */}

      {provider === "Azure" && (
        <div className="flex flex-col items-center">

          <Box color="bg-blue-100">👤 Users</Box>

          <VerticalConnector />

          <Box color="bg-sky-100">🌐 Azure Front Door</Box>

          <VerticalConnector />

          <Box color="bg-sky-100">
            ⚖️ Azure Load Balancer
          </Box>

          <VerticalConnector />

          <Box color="bg-sky-100">🖥 App Service</Box>

          <BranchConnector />

          <div className="flex justify-center gap-20 w-full">
            <Box color="bg-sky-100">🗄 Azure SQL</Box>
            <Box color="bg-sky-100">📦 Blob Storage</Box>
          </div>

        </div>
      )}

      {/* GCP */}

      {provider === "GCP" && (
        <div className="flex flex-col items-center">

          <Box color="bg-blue-100">👤 Users</Box>

          <VerticalConnector />

          <Box color="bg-green-100">
            🌐 Cloud Load Balancer
          </Box>

          <VerticalConnector />

          <Box color="bg-green-100">🖥 Cloud Run</Box>

          <BranchConnector />

          <div className="flex justify-center gap-20 w-full">
            <Box color="bg-green-100">🗄 Cloud SQL</Box>
            <Box color="bg-green-100">📦 Cloud Storage</Box>
          </div>

          <VerticalConnector />

          <Box color="bg-green-100">🤖 Vertex AI</Box>

        </div>
      )}

    </div>
  );
}
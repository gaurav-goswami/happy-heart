import { AlertTriangle } from "lucide-react";

function DashboardErrorBoundaryFallback() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-red-600 px-4 text-center">
      <AlertTriangle className="w-12 h-12 mb-4" />
      <h2 className="text-xl font-semibold mb-2">Something went wrong.</h2>
      <p className="text-sm mb-4">
        We could not load your dashboard. Please try refreshing the page.
      </p>
    </div>
  );
}

export default DashboardErrorBoundaryFallback;

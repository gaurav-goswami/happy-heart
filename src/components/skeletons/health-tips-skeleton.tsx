const HealthTipsSkeleton = () => {
  return (
    <div className="p-4 rounded-xl bg-white shadow-sm space-y-3 w-full animate-pulse h-68">
      <div className="flex items-center gap-2">
        <div className="h-4 w-32 bg-gray-300 rounded" />
      </div>

      <div className="bg-blue-50 rounded-lg p-4 space-y-2">
        <div className="h-6 w-6 bg-blue-200 rounded-full" />
        <div className="h-3 w-full bg-blue-200 rounded" />
        <div className="h-3 w-3/4 bg-blue-200 rounded" />
      </div>

      <div className="h-4 w-28 bg-blue-200 rounded mx-auto" />
    </div>
  );
};

export default HealthTipsSkeleton;

const MoodOptionsSkeleton = () => {
  return (
    <div className="p-4 rounded-xl bg-white shadow-sm space-y-4 animate-pulse w-full">
      {[...Array(6)].map((_, idx) => (
        <div
          key={idx}
          className="flex justify-between items-center rounded-lg bg-gray-100 p-5"
        >
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gray-300" />
            <div>
              <div className="h-4 w-24 bg-gray-300 rounded mb-1" />
              <div className="h-3 w-32 bg-gray-200 rounded" />
            </div>
          </div>
          <div className="h-4 w-12 bg-gray-200 rounded" />
        </div>
      ))}
    </div>
  );
};

export default MoodOptionsSkeleton;

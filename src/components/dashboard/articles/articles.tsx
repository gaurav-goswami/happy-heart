import { getHealthArticles } from "@/lib/api-caller";
import { THealthArticles } from "@/types/type";
import { ChevronRight } from "lucide-react";
import { unstable_cache } from "next/cache";
import Image from "next/image";

const getCachedHealthArticles = unstable_cache(
  async () => (await getHealthArticles()) ?? [],
  ["health-articles"]
);

const Articles = async () => {
  const healthArticles = await getCachedHealthArticles().catch(() => []);

  if (!healthArticles) {
    return (
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Recommended Articles
          </h2>
          <button className="text-blue-500 text-sm font-medium flex items-center">
            View all <ChevronRight className="h-4 w-4 ml-1" />
          </button>
        </div>
        <p>No articles found.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Recommended Articles
        </h2>
        <button className="text-blue-500 text-sm font-medium flex items-center">
          View all <ChevronRight className="h-4 w-4 ml-1" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {healthArticles.length === 0 ? (
          <p className="text-gray-500 text-sm col-span-full">
            No articles found.
          </p>
        ) : (
          healthArticles.map((article: THealthArticles) => (
            <div
              key={article.id}
              className="group overflow-hidden rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300"
            >
              <div className="h-40 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-blue-100 text-blue-600">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-500 ml-auto">
                    5 min read
                  </span>
                </div>
                <h3 className="font-medium text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                  {article.description}
                </p>
                <button className="text-blue-500 text-sm font-medium flex items-center hover:text-blue-700 transition-colors">
                  Read more <ChevronRight className="h-3 w-3 ml-1" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default Articles;

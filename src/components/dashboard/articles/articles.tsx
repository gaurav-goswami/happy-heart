/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const Articles = ({ articles }: { articles: any }) => {
  const healthArticles = articles.healthArticles ?? [];

  if (!healthArticles || healthArticles.length === 0) {
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
        <p className="text-gray-500 text-sm">No articles found.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 shadow-md">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Recommended Articles
        </h2>
        <button className="text-blue-500 text-sm font-medium flex items-center hover:text-blue-600 transition-colors">
          View all <ChevronRight className="h-4 w-4 ml-1" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {healthArticles.length > 0 && healthArticles.map((article: any, index: number) => (
          <a
            key={index}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 bg-white"
          >
            <div className="relative h-44 w-full overflow-hidden">
              <Image
                src={article.urlToImage || "/sleep.webp"}
                alt={article.title}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4 flex flex-col gap-2">
              <h3 className="text-base font-semibold text-gray-800 line-clamp-2 group-hover:text-blue-600 transition-colors">
                {article.title}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-2">
                {article.description}
              </p>
              <div className="mt-auto flex justify-between items-center text-xs text-gray-400">
                <span>
                  {new Date(article.publishedAt).toLocaleDateString(undefined, {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span className="ml-auto">5 min read</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Articles;

// src/components/Articles.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { articles } from "../data/articles"; 

export default function Articles() {
  const navigate = useNavigate();

  return (
    <section className="relative bg-gray-950 py-16 md:py-24 text-left">
      {/* Subtle Background Radial Gradient */}
      <div 
        className="pointer-events-none absolute inset-0 left-1/2 top-0 -z-10 h-[500px] w-full -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(79,70,229,0.15),transparent_50%)]" 
        aria-hidden="true" 
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
          <h2 className="bg-gradient-to-r from-gray-100 via-indigo-200 to-gray-100 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
            Insights for Smarter IT Infrastructure
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Actionable strategies, tool reviews, and frameworks tailored to help fast-growing businesses scale securely.
          </p>
        </div>

        {/* Articles Grid Layout */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article 
              key={article.id} 
              className="group relative flex flex-col rounded-2xl border border-gray-800 bg-gray-900/40 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/50 hover:bg-gray-900/80"
            >
              {/* Category & Metadata */}
              <div className="mb-4 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-indigo-400">
                <span>{article.category}</span>
                <span className="text-gray-500 normal-case">{article.readTime}</span>
              </div>

              {/* Title & Summary */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-200 transition-colors group-hover:text-indigo-300">
                  <button 
                    onClick={() => navigate(`/article/${article.id}`)}
                    className="text-left focus:outline-hidden cursor-pointer"
                  >
                    {article.title}
                  </button>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {article.summary}
                </p>
              </div>

              {/* Card Footer */}
              <div className="mt-6 flex items-center justify-between border-t border-gray-800/60 pt-4 text-xs text-gray-500">
                <span>{article.date}</span>
                <button 
                  onClick={() => navigate(`/article/${article.id}`)}
                  className="flex items-center text-indigo-400 font-medium group-hover:text-indigo-300 cursor-pointer text-xs"
                >
                  Read Article 
                  <span className="ml-1 transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
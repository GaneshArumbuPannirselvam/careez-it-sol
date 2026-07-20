import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../data/articles.jsx'; 
import { Helmet } from "react-helmet-async";

function Insights() {
  const categories = ["All", "Tutorials", "Reviews", "Buying Guides", "Recommended Products"];
  const [activeCategory, setActiveCategory] = useState("All");

  // Dynamically sort articles by date (descending) and filter by category
  const filteredPosts = useMemo(() => {
    if (!articles || articles.length === 0) return [];

    // 1. Sort copy of array descending by date string parsing
    const sorted = [...articles].sort((a, b) => new Date(b.date) - new Date(a.date));

    // 2. Apply category filter
    return activeCategory === "All"
      ? sorted
      : sorted.filter(post => post.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto text-left">
      <Helmet>
        <title>IT Insights, Tech Tutorials & Buying Guides | CareEZ IT Sol</title>
        <meta name="description" content="Explore expert IT resources, cybersecurity tutorials, software reviews, and hardware buying guides tailored for small and medium businesses from the CareEZ engineering team." />
      </Helmet>

      {/* Page Header */}
      <div className="mb-10 max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
          Insights & Resources
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Expert perspectives on IT Infrastructure, Security, and Cloud Architecture.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex gap-4 mb-10 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition whitespace-nowrap border cursor-pointer ${
              activeCategory === cat
                ? "bg-blue-600 border-blue-600 text-white shadow-sm"
                : "bg-white border-gray-200 text-gray-600 hover:border-blue-600 hover:text-blue-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Grid */}
      {filteredPosts && filteredPosts.length > 0 ? (
        <div>
          {/* Enhanced Grid: Clean, compact spacing without vertical stretching */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start mb-12">
            {filteredPosts.map((post, index) => {
              // Convert stored date to a human-friendly format (e.g., "July 19, 2026")
              const displayDate = new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                timeZone: 'UTC' // Prevents local browser offset shifts
              });

              return (
                <div 
                  key={post.id || index} 
                  className="bg-white p-6 rounded-xl shadow-xs border border-gray-100 flex flex-col justify-between h-full min-h-[240px] transition-all duration-200 hover:shadow-md"
                >
                  {/* Upper Content Block */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">{post.category}</span>
                      <span className="text-xs font-medium bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-full">
                        {post.readTime || "5 min read"}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 leading-snug">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {post.summary}
                    </p>
                  </div>
                  
                  {/* Pinned Footer Layer */}
                  <div className="pt-4 mt-6 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs text-gray-400">{displayDate}</span>
                    <Link 
                      to={`/article/${post.id}`} 
                      className="text-blue-600 font-semibold text-sm hover:underline flex items-center"
                    >
                      Read Full Article <span className="ml-1">→</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Clean Bottom Navigation Footer */}
          {/*<div className="mt-12 pt-6 border-t border-gray-100">
            <button 
              onClick={() => setActiveCategory("All")}
              className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors bg-transparent border-0 p-0 cursor-pointer"
            >
              ← Back to All Insights
            </button>
          </div>*/}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-xl border border-gray-100 mb-12">
          <p className="text-gray-500 text-lg">No content found under this specific track yet.</p>
          <button 
            onClick={() => setActiveCategory("All")}
            className="mt-4 text-blue-600 font-semibold hover:underline cursor-pointer bg-transparent border-0"
          >
            Show all available articles
          </button>
        </div>
      )}
    </section>
  );
}

export default Insights;
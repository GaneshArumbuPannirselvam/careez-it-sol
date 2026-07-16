import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../data/articles.jsx'; // Make sure this path correctly points to your articles.js file
// 1. Correct import position for the Helmet tool
import { Helmet } from "react-helmet-async";

function Insights() {
  const categories = ["All", "Tutorials", "Reviews", "Buying Guides", "Recommended Products"];
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter articles dynamically based on selected category tab
  const filteredPosts = activeCategory === "All"
    ? articles
    : articles.filter(post => post.category === activeCategory);

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      {/* 2. Correct metadata insertion point inside the parent section container */}
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
          Expert perspectives on IT Infrastructure, Security, and Revenue Operations. 
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex gap-4 mb-10 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition whitespace-nowrap border ${
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
      {filteredPosts.length > 0 ? (
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {filteredPosts.map((post, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-blue-600">{post.date}</span>
                <span className="text-xs font-medium bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-full">
                  {post.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                {post.summary || "Click below to read our complete structural breakdown and implementation tips."}
              </p>
              <Link 
                to={`/article/${post.id}`} 
                className="text-blue-600 font-semibold text-sm hover:underline"
              >
                Read Full Article →
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-xl border border-gray-100 mb-12">
          <p className="text-gray-500 text-lg">No content found under this specific track yet.</p>
          <button 
            onClick={() => setActiveCategory("All")}
            className="mt-4 text-blue-600 font-semibold hover:underline"
          >
            Show all available articles
          </button>
        </div>
      )}
    </section>
  );
}

export default Insights;

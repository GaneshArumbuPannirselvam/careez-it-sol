import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { articles } from '../data/articles.jsx';

function ArticleTemplate() {
  const { id } = useParams();
  const article = articles.find(a => a.id === id);

  if (!article) {
    return (
      <div className="py-20 px-4 max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Article Not Found
        </h1>
        <p className="text-gray-500 mb-8">
          This article doesn't exist or may have been moved.
        </p>
        <Link to="/insights" className="text-blue-600 font-semibold hover:underline">
          ← Back to Insights
        </Link>
      </div>
    );
  }

  return (
    <article className="py-12 px-4 max-w-4xl mx-auto">
      {/* Back Link */}
      <div className="mb-8">
        <Link to="/insights" className="text-blue-600 text-sm font-medium hover:underline">
          ← Back to Insights & Resources
        </Link>
      </div>

      {/* Header */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-medium bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-full">
            {article.category}
          </span>
        </div>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          {article.title}
        </h1>
        <p className="text-gray-500 italic">
          Published {article.date} | By CareEZ Editorial Team
        </p>
      </header>

      {/* Article Body */}
      <div className="prose lg:prose-xl text-gray-700 leading-relaxed">
        {article.content}
      </div>

      {/* Trust Signals & Legal Disclosures */}
      <footer className="mt-16 pt-8 border-t border-gray-200">
        <div className="text-sm text-gray-500 italic">
          <p className="mb-4">
            <strong>Disclosure:</strong> CareEZ IT SOL is an independent publisher
            and technology consultancy. We may receive commissions from products
            recommended in our articles. Please see our full{' '}
            <Link to="/transparency" className="text-blue-600 hover:underline">
              Affiliate Disclosure, Privacy, and Cookie Policies
            </Link>.
          </p>
          <p className="mb-4">
            <strong>About the Author:</strong> CareEZ IT SOL specializes in Revenue
            Operations (RevOps) and secure IT infrastructure for small businesses
            in Ontario.
          </p>
          <p>
            <strong>Trademark & Brand Disclosure:</strong> All product names, logos, brands, and trademarks 
            mentioned on this site are the property of their respective owners. CareEZ IT SOL is an 
            independent technology consultancy. The use of these trademarks and brand names in our articles 
            and reviews is for identification purposes only and does not imply endorsement by, sponsorship 
            from, or affiliation with the respective trademark holders.
          </p>
        </div>
      </footer>
    </article>
  );
}

export default ArticleTemplate;
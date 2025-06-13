'use client';

import { useEffect, useState } from 'react';
import ArticlesList from '../components/ArticlesList';

export default function Home() {
  const [articles, setArticles] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/articles`)
      .then((res) => res.json())
      .then(setArticles)
      .catch((err) => {
        console.error('Failed to load articles:', err);
        setError('Could not fetch articles');
      });
  }, []);

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Latest Hacker News Scrape
      </h1>

      {error && (
        <p className="text-center text-red-500">{error}</p>
      )}

      {articles === null ? (
        <p className="text-center text-gray-500 dark:text-gray-400">
          Loading articles...
        </p>
      ) : (
        <ArticlesList articles={articles} />
      )}
    </main>
  );
}
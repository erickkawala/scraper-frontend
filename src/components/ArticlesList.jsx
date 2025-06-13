export default function ArticlesList({ articles }) {
    if (!articles?.length) {
        return (
            <p className="text-center text-gray-500 dark:text-gray-400">
                No articles available.
            </p>
        );
    }

    return (
        <div className="mx-auto max-w-3xl px-4 py-6 space-y-6">
            {articles.map((article, i) => (
                <article
                    key={i}
                    className="rounded-xl border border-gray-300 bg-white p-6 shadow-md transition hover:shadow-lg dark:border-gray-700 dark:bg-gray-900"
                >
                    <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-2xl font-bold text-blue-600 hover:text-blue-800 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
                    >
                        {article.title}
                    </a>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        {new Date(article.date).toLocaleDateString(undefined, {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                        })}
                    </p>
                </article>
            ))}
        </div>
    );
}
  
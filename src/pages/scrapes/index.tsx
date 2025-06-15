import React, { useEffect, useState } from "react";
import Link from "next/link";

interface Scrape {
    id: string; // or number depending on your DB
}

const ScrapesPage: React.FC = () => {
    const [scrapes, setScrapes] = useState<Scrape[]>([]);

    useEffect(() => {
        const fetchScrapes = async () => {
            const res = await fetch("/api/scrapes");
            const data = await res.json();
            setScrapes(data);
        };
        fetchScrapes();
    }, []);

    return (
        <div className="p-8 max-w-2xl mx-auto">
            <h1 className="text-3xl font-extrabold mb-6 text-center">Scrapes</h1>
            <ul className="space-y-4">
                {scrapes.map((scrape) => (
                    <li key={scrape.id}>
                        <Link
                            href={`/scrapes/${scrape.id}`}
                            className="block border border-gray-300 rounded-lg p-4 hover:bg-gray-100 hover:border-blue-500 transition"
                        >
                            <span className="text-lg font-medium text-blue-700">
                                Scrape {scrape.id}
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ScrapesPage;
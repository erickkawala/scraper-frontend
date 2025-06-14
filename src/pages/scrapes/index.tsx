import React, { useEffect, useState } from "react";
import Link from "next/link";

interface Scrape {
    id: string;         // or number depending on your DB
    title: string;      // or whatever field you use for display
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
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Scrapes</h1>
            <ul className="space-y-2">
                {scrapes.map(scrape => (
                    <li key={scrape.id}>
                        <Link
                            className="text-blue-600 hover:underline"
                            href={`/scrapes/${scrape.id}`}
                        >
                            {scrape.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ScrapesPage;
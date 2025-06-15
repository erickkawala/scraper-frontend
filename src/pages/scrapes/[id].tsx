import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CodeSample from "@/components/CodeSample";

const ScrapeDetailPage: React.FC = () => {
    const { query } = useRouter();
    const { id } = query;
    const [scrape, setScrape] = useState<any>(null);

    useEffect(() => {
        if (id) {
            const fetchScrape = async () => {
                const res = await fetch(`/api/scrapes/${id}`);
                const data = await res.json();
                setScrape(data);
            };
            fetchScrape();
        }
    }, [id]);

    if (!scrape) return <p className="p-4">Loading...</p>;

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">{scrape.title}</h1>
            <CodeSample code={scrape.codeSample} />
        </div>
    );
};

export default ScrapeDetailPage;

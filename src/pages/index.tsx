import React from "react";
import { useRouter } from "next/router";

const HomePage: React.FC = () => {
    const router = useRouter();

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Welcome to the Scraper App</h1>
            <button
                onClick={() => router.push("/scrapes")}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                View Scrapes
            </button>
        </div>
    );
};

export default HomePage;

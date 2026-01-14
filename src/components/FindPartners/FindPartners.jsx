import React, { useState } from "react";
import { useLoaderData } from "react-router";
import PartnerCard from "../Partner/PartnerCard";

const FindPartners = () => {
    const partners = useLoaderData() || [];
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState(""); // "asc" or "desc"
    // const [loading, setLoading] = useState(true);

    // Filter partners by subject
    const filteredPartners = partners.filter((partner) =>
        partner.subject.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedPartners = [...filteredPartners].sort((a, b) => {
        if (!sortOrder) return 0;

        const ratingA = parseFloat(a.rating) || 0;
        const ratingB = parseFloat(b.rating) || 0;

        if (sortOrder === "asc") {
            return ratingA - ratingB; // Low → High
        } else {
            return ratingB - ratingA; // High → Low
        }
    });

    // if (loading) return <span className="loading loading-bars loading-xl"></span>;
    //setLoading(false);


    return (
        <div className="w-full px-4 py-6 ">

            <div className="mx-auto max-w-7xl ">
                {/* Search & Sort Controls */}
                <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                    <input
                        type="text"
                        placeholder="Search by subject..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="border px-3 py-2 rounded w-full sm:w-1/2"
                    />
                    <select
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                        className="border px-3 py-2 rounded w-full sm:w-1/4"
                    >
                        <option value="">Sort by Experience Level</option>
                        <option value="asc">Experience: Low to High</option>
                        <option value="desc">Experience: High to Low</option>
                    </select>
                </div>

                {sortedPartners.length === 0 ? (
                    <p className="min-h-screen flex justify-center text-center italic text-gray-400 mt-6">THERE ARE NO SUBJECT</p>
                ) : (
                    <div
                        className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            gap-6
            place-items-center
        "
                    >
                        {sortedPartners.map((partner) => (
                            <PartnerCard key={partner._id} partner={partner} />
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
};

export default FindPartners;





import React, { use } from "react";
import PartnerCard from "../Partner/PartnerCard";

const TopStudyPartners = ({ topStudyPartnersPromise }) => {
    const partners = use(topStudyPartnersPromise) || [];

    return (
        <div className="w-full px-4 py-10 ">
            {/* Section Heading */}
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 ">
                Top Study Partners
            </h2>

            {/* Responsive Centered Grid */}
            <div
                className="
          grid 
          grid-cols-1 
          md:grid-cols-2 
          lg:grid-cols-3 
          gap-3 
          justify-center
          place-items-center
        "
            >
                {partners.map((partner, index) => (
                    <div
                        key={partner._id}
                        className=" transform transition duration-500 hover:scale-105 animate-fadeIn"
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <PartnerCard partner={partner} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopStudyPartners;




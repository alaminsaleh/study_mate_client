import React from 'react';
import { Link } from 'react-router';


const PartnerCard = ({ partner }) => {
    const {
        _id,
        name,
        profileimage,
        profileImage,
        subject,
        experience,
        experienceLevel,
        rating,
    } = partner;


    return (
        <div className="card w-72 bg-base-100 shadow-xl rounded-2xl border border-gray-200 hover:shadow-2xl transition duration-300">


            {/* Profile Image */}
            <figure className="px-6 pt-6">
                <img
                    src={profileimage || profileImage}
                    alt={name}
                    className="rounded-xl h-40 w-full object-cover shadow-sm"
                />
            </figure>


            {/* Card Body */}
            <div className="card-body">


                {/* Name */}
                <h2 className="card-title text-xl font-bold text-base-content">
                    {name}
                </h2>


                <div className=' flex justify-center items-center'>
                    {/* Subject */}
                    <p className="text-sm text-gray-500 font-medium">
                        {subject}
                    </p>
                    {/* NEW: Experience */}
                    <span className="badge badge-outline border-yellow-600 mt-2">
                        {experience || experienceLevel}
                    </span>
                </div>


                {/* Rating */}
                <div className="flex items-center gap-2 mt-2">
                    <div className="text-lg flex items-center justify-center font-bold">{rating} <span className='text-yellow-400'>⭐</span> </div>
                    {/* <span className="font-semibold">5.0</span> */}
                </div>


                {/* Button */}
                <div className="card-actions mt-4">
                    <Link to={`/partnerDetails/${_id}`} className="btn btn-primary w-full rounded-xl">
                        View Profile
                    </Link>
                </div>


            </div>
        </div>


    );
};


export default PartnerCard;



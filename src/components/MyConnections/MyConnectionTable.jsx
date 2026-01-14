import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";


const MyConnectionTable = ({ request, handleDelete, handleUpdate }) => {
    const {
        partnerName,
        partnerSubject,
        partnerExperience,
        partnerImage,
        profileimage,
        date,
    } = request;

    // profileImage
    // partnerImage
    // partnerExperience
    return (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow mb-3">


            {/* Avatar + Name */}
            <div className="flex items-center gap-3 flex-1 min-w-[200px]">
                <div className="avatar w-12 h-12">
                    <div className="mask mask-squircle w-full h-full">
                        <img src={partnerImage || profileimage} alt={partnerName} />
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold text-xl text-gray-900">{partnerName}</h3>
                    {/* <p className="text-sm text-gray-400">{partnerEmail}</p> */}
                    <span className="text-[10px] text-gray-400 border p-1 rounded-2xl">{partnerExperience}</span>

                </div>
            </div>

            {/* Subject + Experience */}
            <div className="flex flex-col text-xl flex-1 min-w-[200px] text-gray-700">
                <span className="font-medium">{partnerSubject}</span>
                {/* Date */}
                <div className="flex-shrink-0 text-[10px] text-gray-400">
                    {new Date(date).toLocaleDateString()} <span>(Connected Date)</span>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 flex-shrink-0">
                <button
                    onClick={() => handleUpdate(request)}
                    className="btn btn-sm btn-info text-white flex items-center gap-2"
                >
                    <FaEdit size={14} /> Update
                </button>
                <button
                    onClick={() => handleDelete(request)}
                    className="btn btn-sm btn-error text-white flex items-center gap-2"
                >
                    <FaTrash size={14} /> Delete
                </button>
            </div>
        </div>
    );
};


export default MyConnectionTable;




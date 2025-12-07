import React, { useContext, useRef } from 'react';
import { Navigate, useLoaderData } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import Swal from 'sweetalert2';


const PartnerDetails = () => {
    const {
        _id: partnerId,
        name,
        email,
        experienceLevel,
        experience,
        availability,
        availabilityTime,
        studyMode,
        partnerCount,
        rating,
        location,
        subject,
        profileimage,
        profileImage } = useLoaderData();
    const connectionModalRef = useRef(null);
    const { user } = useContext(AuthContext);
    // console.log(partner);


    // Navigate('/')


    const handleConnectionModelOpen = () => {
        connectionModalRef.current.showModal();
    }


    const handleRequestSubmit = async (e) => {
        e.preventDefault();


        const requesterName = e.target.name.value;
        const requesterEmail = e.target.email.value;


        const newRequest = {
            partnerId,
            partnerName: name,
            partnerEmail: email,
            partnerSubject: subject,
            partnerExperience: experienceLevel,
            partnerImage: profileimage,
            requesterName,
            requesterEmail,
            date: new Date()
        };


        try {
            const res1 = await fetch("http://localhost:3000/requests", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(newRequest)
            });
            const result1 = await res1.json();
            if (!result1.insertedId) return alert("Request failed!");


            //  Increase partnerCount in MongoDB
            await fetch(`http://localhost:3000/partners/${partnerId}/increment`, { method: "PUT" });


            connectionModalRef.current.close();
            alert("Request Sent! Partner count increased.");
        } catch (err) {
            alert("Error: " + err.message);
        }
    };








    return (
        <div>
            {/* partner info */}
            <div>
                <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 my-10 border border-gray-100">
                    {/* Header Section */}
                    <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">


                        {/* Profile Image */}
                        <img
                            src={profileimage || profileImage}
                            alt={name}
                            className="w-48 h-48 object-cover rounded-xl shadow-md"
                        />


                        {/* Profile Basic Info */}
                        <div className="flex-1">
                            <h1 className="text-3xl font-bold text-gray-900">{name}</h1>


                            <p className="text-lg mt-1 text-gray-600">
                                📘 <span className="font-semibold">{subject}</span>
                            </p>


                            <p className="text-gray-500 mt-1">📍 {location}</p>


                            {/* Rating */}
                            <div className="flex items-center gap-2 mt-3">
                                <span className="text-yellow-500 text-xl">⭐</span>
                                <p className="font-semibold text-gray-800">{rating} / 5</p>
                            </div>


                            {/* Partner Count */}
                            <p className="mt-2 text-gray-700">
                                🤝 <span className="font-semibold">{partnerCount}</span> Active Study Partners
                            </p>
                        </div>
                    </div>


                    {/* Divider */}
                    <div className="my-6 border-t"></div>


                    {/* Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">


                        <div className="bg-gray-50 p-5 rounded-xl border">
                            <p className="text-sm text-gray-500 mb-1">📖 Study Mode</p>
                            <p className="text-lg font-semibold">{studyMode}</p>
                        </div>


                        <div className="bg-gray-50 p-5 rounded-xl border">
                            <p className="text-sm text-gray-500 mb-1">⏳ Availability</p>
                            <p className="text-lg font-semibold">{availabilityTime || availability}</p>
                        </div>


                        <div className="bg-gray-50 p-5 rounded-xl border">
                            <p className="text-sm text-gray-500 mb-1">🎓 Experience Level</p>
                            <p className="text-lg font-semibold">{experienceLevel || experience}</p>
                        </div>


                        <div className="bg-gray-50 p-5 rounded-xl border">
                            <p className="text-sm text-gray-500 mb-1">📧 Email</p>
                            <p className="text-lg font-semibold">{email}</p>
                        </div>


                    </div>


                    {/* CTA Button */}
                    <div className="mt-8 text-center">




                        <button className="px-6 py-3 bg-blue-600 text-white text-lg rounded-xl shadow-md hover:bg-blue-700 transition"
                            onClick={handleConnectionModelOpen}
                        >Send Partner Request!</button>
                    </div>


                </div>


                <div>
                    <dialog ref={connectionModalRef} className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Send Partner Request</h3>
                            <p className="py-2 text-gray-600">You are sending a request to:</p>


                            {/* PARTNER INFORMATION SECTION */}
                            <div className="p-4 bg-gray-50 rounded-xl border mb-4">
                                <h4 className="text-lg font-semibold">{name}</h4>
                                <p className="text-sm text-gray-600">📘 Subject: {subject}</p>
                                <p className="text-sm text-gray-600">🎓 Experience: {experienceLevel}</p>
                                <p className="text-sm text-gray-600">📧 {email}</p>
                            </div>


                            <form onSubmit={handleRequestSubmit}>
                                <fieldset className="fieldset p-6 border rounded-xl bg-base-100 shadow-md w-full max-w-md mx-auto">


                                    <legend className="text-xl font-bold mb-4">Your Information</legend>


                                    {/* Requester Name */}
                                    <label className="label">
                                        <span className="label-text font-medium">Your Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="input input-bordered w-full mb-4"
                                        value={user?.displayName || ""}
                                        readOnly
                                    />


                                    {/* Requester Email */}
                                    <label className="label">
                                        <span className="label-text font-medium">Your Email</span>
                                    </label>
                                    <input
                                        name="email"
                                        type="email"
                                        className="input input-bordered w-full mb-4"
                                        value={user?.email || ""}
                                        readOnly
                                    />


                                    <button className="btn btn-primary w-full mt-4">
                                        Send Partner Request
                                    </button>
                                </fieldset>
                            </form>


                            <div className="modal-action">
                                <form method="dialog">
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>


                </div>
            </div>
            {/* connection for this partners*/}
        </div>
    );
};


export default PartnerDetails;

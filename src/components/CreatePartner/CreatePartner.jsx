// import axios from 'axios';
import React, { useContext } from 'react';
import Swal from 'sweetalert2';
// import useAuth from '../../hooks/useAuth';
import useAxios from '../../hooks/useAxios';
import { AuthContext } from '../../contexts/AuthContext';
import { toast } from 'react-toastify';


const CreatePartner = () => {
    const { user } = useContext(AuthContext)
    // const { user } = useAuth();
    const axiosInstance = useAxios()
    const handleCreatePartner = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const profileimage = event.target.profileimage.value;
        const subject = event.target.subject.value;
        const studyMode = event.target.studyMode.value;
        const availabilityTime = event.target.availabilityTime.value;
        const location = event.target.location.value;
        const experienceLevel = event.target.experienceLevel.value;
        const rating = event.target.rating.value;
        const email = event.target.email.value;
        const newPartner = {
            name
            , profileimage
            , subject
            , studyMode
            , availabilityTime
            , location
            , experienceLevel
            , rating
            , email
        }


        axiosInstance.post('/partners', newPartner)
            .then(data => {
                console.log(data.data);
                Swal.fire({
                    title: "Wahh! Wahh! Successfully created a Profile",
                    icon: "success",
                    draggable: true
                });
            })
        event.target.reset();


    }

    const handleRatingChange = (e) => {
        let value = parseFloat(e.target.value);
        if (value < 0) {
            value = 0;
            toast.error("Minimum rating is 0");
        }
        if (value > 5) {
            value = 5;
            toast.error("Maximum rating is 5");
        }

        e.target.value = value;
    };


    return (
        <div className='py-5'>

            <form onSubmit={handleCreatePartner}>
                <fieldset className="fieldset p-6 border rounded-xl bg-base-100 shadow-md w-full max-w-md mx-auto">


                    {/* Form Title */}
                    <legend className="text-xl font-bold mb-4">Your Information</legend>


                    {/* NAME */}
                    <label className="label">
                        <span className="label-text font-medium">Full Name</span>
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter full name"
                        className="input input-bordered w-full mb-4"
                        required
                    />


                    {/* PROFILE IMAGE */}
                    <label className="label">
                        <span className="label-text font-medium">Profile Image</span>
                    </label>
                    <input
                        type="text"
                        name="profileimage"
                        placeholder="Image URL"
                        className="input input-bordered w-full mb-4"
                    />


                    {/* SUBJECT */}
                    <label className="label">
                        <span className="label-text font-medium">Subject</span>
                    </label>
                    <input
                        type="text"
                        name="subject"
                        placeholder="English, Math, Programming, etc."
                        className="input input-bordered w-full mb-4"
                    />


                    {/* STUDY MODE */}
                    <label className="label">
                        <span className="label-text font-medium">Study Mode</span>
                    </label>
                    <select name="studyMode" className="select select-bordered w-full mb-4">
                        <option>Online</option>
                        <option>Offline</option>
                    </select>


                    {/* availabilityTime TIME */}
                    <label className="label">
                        <span className="label-text font-medium">Available Time</span>
                    </label>
                    <input
                        type="text"
                        name="availabilityTime"
                        placeholder="e.g., Evening 6–9 PM"
                        className="input input-bordered w-full mb-4"
                    />


                    {/* LOCATION */}
                    <label className="label">
                        <span className="label-text font-medium">Location</span>
                    </label>
                    <input
                        type="text"
                        name="location"
                        placeholder="City or area"
                        className="input input-bordered w-full mb-4"
                    />


                    {/* experienceLevel LEVEL */}
                    <label className="label">
                        <span className="label-text font-medium">Experience Level</span>
                    </label>
                    <select name="experienceLevel" className="select select-bordered w-full mb-4">
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Expert</option>
                    </select>


                    {/* RATING */}
                    <label className="label">
                        <span className="label-text font-medium">Rating</span>
                    </label>
                    {/* <input
                        type="number"
                        name="rating"
                        min="0"
                        max="5"
                        step="0.1"
                        placeholder="Numeric rating"
                        className="input input-bordered w-full mb-4"
                    /> */}
                    <input
                        type="number"
                        name="rating"
                        min="0"
                        max="5"
                        step="0.1"
                        placeholder="Numeric rating"
                        onChange={handleRatingChange}
                        className="input input-bordered w-full mb-4"
                    />



                    {/* PARTNER COUNT */}
                    <label className="label">
                        <span className="label-text font-medium">Partner Count</span>
                    </label>
                    <input
                        type="number"
                        name="partnerCount"
                        value={0}
                        readOnly
                        className="input input-bordered w-full mb-4 bg-gray-100"
                    />


                    {/* EMAIL (read only) */}
                    <label className="label">
                        <span className="label-text font-medium">Email</span>
                    </label>
                    <input
                        value={user.email}
                        readOnly
                        type="email"
                        name="email"
                        className="input input-bordered w-full mb-4"
                    />


                    {/* SUBMIT BUTTON */}
                    <button
                        className="btn btn-primary w-full mt-4"
                    >
                        Create Profile
                    </button>


                </fieldset>
            </form>


        </div>
    );
};


export default CreatePartner;

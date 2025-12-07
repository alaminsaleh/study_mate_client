import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

const Profile = () => {
    const { user } = useContext(AuthContext);

    if (!user) {
        return <p className="text-center mt-10">You are not logged in.</p>;
    }

    return (
        <div className="max-w-md mx-auto mt-10 p-6 rounded-xl shadow-lg bg-base-200">
            <h2 className="text-2xl font-bold text-center mb-5">My Profile</h2>

            <div className="flex flex-col items-center gap-4">
                <img
                    src={user.photoURL}
                    alt="Profile"
                    className="w-28 h-28 rounded-full object-cover border"
                />

                <p className="text-lg font-semibold">Name: {user.displayName}</p>
                <p className="text-lg">Email: {user.email}</p>
            </div>
        </div>
    );
};

export default Profile;

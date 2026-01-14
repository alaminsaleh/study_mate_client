import { useEffect, useState } from "react";
import axios from "axios";
import MyConnectionTable from "./MyConnectionTable";
import useAuth from "../../hooks/useAuth";

const MyConnections = () => {
    const { user } = useAuth();
    const [requests, setRequests] = useState([]);
    // const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user?.email) return;

        const url = `http://localhost:3000/requests?email=${user.email}`;
        console.log("FETCHING:", url);

        axios
            .get(url)
            .then((res) => {
                console.log("DATA:", res.data);
                setRequests(res.data);
            })
            .catch((err) => console.error(err))
        // .finally(() => setLoading(false));
    }, [user?.email]);


    // if (loading) return <p>Wahh Wahh...</p>;


    const handleDelete = async (request) => {
        const confirmDelete = window.confirm(`Delete ${request.partnerName}?`);
        if (!confirmDelete) return;

        try {
            // Delete request
            await axios.delete(`http://localhost:3000/requests/${request._id}`);

            // Decrease partnerCount
            await axios.put(`http://localhost:3000/partners/${request.partnerId}/decrement`);

            // Update local state
            setRequests(prev => prev.filter(r => r._id !== request._id));
        } catch (err) {
            console.error(err);
            alert("Failed to delete.");
        }
    };

    const handleUpdate = async (request) => {
        const updatedSubject = prompt("Edit Subject:", request.partnerSubject);
        if (updatedSubject === null) return;

        try {
            await axios.put(
                `http://localhost:3000/requests/${request._id}`,
                { partnerSubject: updatedSubject }
            );

            setRequests(prev =>
                prev.map(r =>
                    r._id === request._id
                        ? { ...r, partnerSubject: updatedSubject }
                        : r
                )
            );

            alert("Updated successfully!");
        } catch (err) {
            console.error("PUT error:", err.response || err);
            alert("Failed to update.");
        }
    };

    return (
        <div className="min-h-screen p-6">
            <h1 className="text-xl font-bold mb-6 flex justify-end items-center gap-3">
                <span >My Connections</span>
                <span className="bg-red-300 text-green-800 font-semibold px-3 py-1 rounded-full shadow-md animate-pulse">
                    {requests.length}
                </span>
            </h1>

            {requests.length > 0 ? (
                <div className="space-y-4">
                    {requests.map((req) => (
                        <MyConnectionTable key={req._id} request={req}
                            handleDelete={handleDelete}
                            handleUpdate={handleUpdate}
                        />
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500">No partners yet.</p>
            )}
        </div>
    );
};


export default MyConnections;

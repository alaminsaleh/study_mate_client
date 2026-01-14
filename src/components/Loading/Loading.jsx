import React from 'react';


const Loading = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-white">
            <div className="w-10 h-10 bg-[#97a709] rounded-full animate-bounce"></div>
            <p className="mt-4 text-gray-700 font-medium">Wahh Wahh...</p>
        </div>
    );
};


export default Loading;

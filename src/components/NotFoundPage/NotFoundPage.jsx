

// src/components/NotFoundPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-4">

            {/* Animated 404 */}
            <motion.h1
                className="text-9xl font-extrabold mb-4 relative inline-block"
                animate={{ y: [0, -20, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 blur-2xl rounded-3xl"></span>
                <span className="relative">404</span>
            </motion.h1>

            {/* Animated heading */}
            <motion.h2
                className="text-3xl md:text-4xl font-semibold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                Oops! Page Not Found
            </motion.h2>

            {/* Animated paragraph */}
            <motion.p
                className="mb-8 text-center text-lg md:text-xl max-w-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
            >
                The page you are looking for doesn’t exist or has been moved.
            </motion.p>

            {/* Animated button */}
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <Link
                    to="/"
                    className="px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition"
                >
                    Go Back Home
                </Link>
            </motion.div>
        </div>
    );
};

export default NotFoundPage;

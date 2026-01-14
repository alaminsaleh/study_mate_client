
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import { AuthContext } from "../../contexts/AuthContext";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
    const { createUser, updateUserProfile } = useAuth();
    const { signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    const [step, setStep] = useState(1);
    const [passwordError, setPasswordError] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        photo: "",
        password: "",
    });

    const handleNext = () => setStep((prev) => Math.min(prev + 1, 2));
    const handlePrevious = () => setStep((prev) => Math.max(prev - 1, 1));

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        const { password, name, email, photo } = formData;

        // Password validation
        if (password.length < 6) {
            return setPasswordError("Password must be at least 6 characters");
        }
        if (!/[A-Z]/.test(password)) {
            return setPasswordError("Password must contain at least one uppercase letter");
        }
        if (!/[a-z]/.test(password)) {
            return setPasswordError("Password must contain at least one lowercase letter");
        }
        setPasswordError("");

        try {
            await createUser(email, password);
            await updateUserProfile(name, photo);

            toast.success("Registration Successful!");
            setTimeout(() => navigate("/"), 1200);
        } catch (error) {
            toast.error(error.message);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle();
            toast.success("Signed in with Google!");
            setTimeout(() => navigate("/"), 1000);
        } catch (err) {
            toast.error(err?.message || "Google sign-in failed");
        }
    };

    return (
        <div className="max-w-md lg:py-10 mx-auto mt-10 p-6 bg-white font-bold text-purple-600 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-center mb-4">Register</h2>

            {/* Progress Bar */}
            <div className="flex items-center mb-6">

                {[1, 2].map((num) => (
                    <div key={num} className="flex-1 flex items-center">
                        <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${step >= num ? "bg-pink-500" : "bg-gray-300"
                                }`}
                        >
                            {num}
                        </div>
                        {num !== 2 && (
                            <div
                                className={`flex-1 h-1 ${step > num ? "bg-pink-500" : "bg-gray-300"
                                    }`}
                            ></div>
                        )}
                    </div>
                ))}
            </div>

            <form
                onSubmit={(e) => {
                    if (step === 2) {
                        handleRegister(e);
                    } else {
                        e.preventDefault(); // prevent submit on step 1
                        handleNext();
                    }
                }}
            // className="flex flex-col justify-center items-center min-h-[250px]"
            >
                {/* Step 1 - Name & Password */}
                {step === 1 && (
                    <div>
                        <label className="block mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border rounded mb-4"
                        />
                        <label className="block mb-2">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border rounded mb-2"
                        />
                        {passwordError && (
                            <p className="text-red-600 text-sm mb-2">{passwordError}</p>
                        )}
                    </div>
                )}

                {/* Step 2 - Email & Photo URL */}
                {step === 2 && (
                    <div>
                        <label className="block mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border rounded mb-4"
                        />
                        <label className="block mb-2">Photo URL</label>
                        <input
                            type="text"
                            name="photo"
                            value={formData.photo}
                            onChange={handleChange}
                            className="w-full p-2 border rounded mb-4"
                        />
                    </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-4">
                    <button
                        type="button"
                        onClick={handlePrevious}
                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded disabled:opacity-50"
                        disabled={step === 1}
                    >
                        Previous
                    </button>

                    <button
                        type="submit"
                        className={`px-4 py-2 rounded ${step < 2
                            ? "bg-pink-500 text-white"
                            : "bg-blue-600 text-white"
                            }`}
                    >
                        {step < 2 ? "Next" : "Register"}
                    </button>
                </div>
            </form>

            {/* Google Sign-In */}
            <button
                onClick={handleGoogleSignIn}
                className="mt-4 w-full flex items-center justify-center gap-2 bg-white border rounded py-2 hover:bg-gray-100 transition-colors"
            >
                <FcGoogle className="text-2xl" /> Continue with Google
            </button>

            {/* Login Link */}
            <p className="text-center mt-4">
                Already have an account?{" "}
                <Link className="text-blue-600" to="/login">
                    Login
                </Link>
            </p>
        </div>
    );
};

export default Register;

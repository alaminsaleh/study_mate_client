import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router"; // <-- corrected
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // <-- required for toast styles
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const { signInUser, signInWithGoogle, loading, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogIn = async (event) => {
        event.preventDefault();
        const form = event.target;
        const password = form.password.value;

        // simple validation
        if (!email || !password) {
            toast.error("Please fill all fields!");
            return;
        }

        signInUser(email, password)
            .then(() => {
                toast.success("Login successful!");
                form.reset();
                setTimeout(() => navigate("/"), 1500);
            })
            .catch((error) => {
                setError(error.code);
                toast.error(`Error: ${error.code}`);
            });
    };

    const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle();
            toast.success("Signed in with Google!");
            setTimeout(() => navigate("/"), 1000);
        } catch (err) {
            const msg = err?.message || "Google sign-in failed";
            toast.error(msg);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-100 via-pink-100 to-yellow-100">
            <div className="card bg-white py-10 px-8 w-full max-w-sm shadow-2xl rounded-3xl border border-gray-200">
                <div className="card-body">
                    <h2 className="text-3xl font-extrabold text-center text-purple-700 mb-6">
                        Login to Your Account
                    </h2>

                    <form onSubmit={handleLogIn} className="space-y-4" autoComplete="on">
                        {/* Email */}
                        <div>
                            <label className="label font-semibold text-gray-700">Email</label>
                            <input
                                required
                                name="email"
                                type="email"
                                className="input input-bordered w-full rounded-lg border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        {/* Password with toggle */}
                        <div className="relative">
                            <label className="label font-semibold text-gray-700">Password</label>
                            <input
                                required
                                name="password"
                                type={showPassword ? "text" : "password"}
                                className="input input-bordered w-full rounded-lg border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 pr-12"
                                placeholder="Enter your password"
                            />
                            <span
                                className="absolute right-2 top-8 text-gray-500 cursor-pointer text-xl"
                                onClick={() => setShowPassword(!showPassword)}
                                role="button"
                                aria-label="toggle password visibility"
                            >
                                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                            </span>
                        </div>

                        {/* Forgot password */}
                        <div className="text-right mt-1">
                            <Link
                                className="link link-hover text-red-600"
                                to="/forget-password"
                                state={{ email }} // send email to forgot page
                            >
                                Forgot password?
                            </Link>
                        </div>

                        <button
                            type="submit"
                            className="btn w-full mt-4 bg-purple-600 text-white hover:bg-purple-700 rounded-lg font-semibold shadow-lg transition-all duration-300"
                        >
                            Login
                        </button>
                    </form>

                    <div className="divider">OR</div>

                    {/* Google Sign-In */}
                    <button
                        onClick={handleGoogleSignIn}
                        className="btn bg-white border w-full flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
                        type="button"
                    >
                        <FcGoogle className="text-2xl" /> Sign in with Google
                    </button>

                    <p className="text-center mt-4 text-gray-600">
                        Don't have an account?{" "}
                        <Link to="/register" className="text-purple-600 font-semibold hover:underline">
                            Register
                        </Link>
                    </p>

                    {/* Optional: show raw error for debugging */}
                    {/* {error && <p className="text-sm text-red-600 mt-3 text-center">{error}</p>} */}
                </div>
            </div>

            {/* ToastContainer: can be placed globally in App.jsx instead */}
            <ToastContainer position="top-center" autoClose={2000} hideProgressBar={false} />
        </div>
    );
};

export default Login;

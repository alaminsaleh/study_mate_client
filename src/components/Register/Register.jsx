import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import { AuthContext } from "../../contexts/AuthContext";
import { FcGoogle } from "react-icons/fc";
// import useAuth from "../hooks/useAuth"; // your auth context

const Register = () => {
    const { createUser, updateUserProfile } = useAuth();

    const [passwordError, setPasswordError] = useState("");
    const navigate = useNavigate();
    // const location = useLocation();
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    // const from = location.state?.from?.pathname || "/";
    // navigate('/'); 
    const handleRegister = async (e) => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        // Password Validation
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
            // 1. Create account
            const result = await createUser(email, password);
            console.log(result);
            // 2. Update name + photo
            await updateUserProfile(name, photo);

            toast.success("Registration Successful!");
            setTimeout(() => navigate("/"), 1200);
            // navigate(from, { replace: true });
            // navigate('/');
        } catch (error) {
            toast.error(error.message);
        }
    };

    // const handleGoogle = async () => {
    //     try {
    //         await googleLogin();
    //         toast.success("Logged in with Google!");
    //         // navigate(from, { replace: true });
    //         navigate('/')
    //     } catch (err) {
    //         toast.error(err.message);
    //     }
    // };

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
        <div className="max-w-md mx-auto p-6 bg-white shadow rounded">
            <h2 className="text-2xl font-semibold text-center mb-4">Register</h2>

            <form onSubmit={handleRegister}>

                {/* Name */}
                <label className="block mb-2">Name</label>
                <input
                    type="text"
                    name="name"
                    required
                    className="w-full p-2 border rounded mb-4"
                />

                {/* Email */}
                <label className="block mb-2">Email</label>
                <input
                    type="email"
                    name="email"
                    required
                    className="w-full p-2 border rounded mb-4"
                />

                {/* Photo URL */}
                <label className="block mb-2">Photo URL</label>
                <input
                    type="text"
                    name="photo"
                    className="w-full p-2 border rounded mb-4"
                />

                {/* Password */}
                <label className="block mb-2">Password</label>
                <input
                    type="password"
                    name="password"
                    required
                    className="w-full p-2 border rounded"
                />
                {passwordError && (
                    <p className="text-red-600 text-sm mt-1">{passwordError}</p>
                )}

                {/* Register Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white p-2 rounded mt-4"
                >
                    Register
                </button>
            </form>



            {/* Google Login
            <button
                onClick={handleGoogle}
                className="w-full bg-red-500 text-white p-2 rounded mt-3 flex items-center justify-center gap-2"
            >
                <FaGoogle /> 
            </button> */}

            {/* Google Sign-In */}
            <button
                onClick={handleGoogleSignIn}
                className="btn bg-white border w-full flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
                type="button"
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




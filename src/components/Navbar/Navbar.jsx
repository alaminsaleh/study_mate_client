import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import Loading from '../Loading/Loading';
import Swal from 'sweetalert2';

const Navbar = () => {
    const { _id, user, signOutUser } = useContext(AuthContext);

    const [theme, setThem] = useState(localStorage.getItem("theme") || "light")

    useEffect(() => {
        const html = document.querySelector('html')
        html.setAttribute('data-theme', theme)
        localStorage.setItem("theme", theme)
    }, [theme])


    const handleTheme = (checked) => {
        setThem(checked ? "dark" : "light")
    }


    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                {
                    Swal.fire({
                        title: "Logout Successfully!!",
                        icon: "success",
                        draggable: true
                    });
                }
                // alert("Sign Out Successfully");
            })
            .catch(error => console.log(error.message));
    };

    const links = (
        <ul className="navbar-links md:flex-row flex-col">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/findPartners">Find Partners</NavLink></li>

            {user && (
                <>
                    <li><NavLink to="/createPartner">Create Partner Profile</NavLink></li>
                    <li><NavLink to="/myConnection">My Connections</NavLink></li>
                    {/* <li><NavLink to={`/partnerDetails/:${_id}`}>Partner Details</NavLink></li> */}
                </>
            )}
        </ul>
    );




    return (
        <div className="navbar bg-base-100 shadow-sm">
            {/* LEFT */}
            <div className="navbar-start">

                {/* MOBILE MENU BUTTON — SHOW ONLY ON SMALL SCREENS */}
                <div className="dropdown md:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>

                    {/* MOBILE DROPDOWN — HIDE ON md+ */}
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52 md:hidden">
                        {links}
                    </ul>
                </div>

                {/* LOGO */}
                <NavLink
                    to="/"
                    className="logo text-3xl font-black tracking-tight flex items-center 
                    transition-transform duration-300 hover:scale-105"
                >
                    <span className="bg-gradient-to-r from-[#2970fe] to-[#2937fe] 
                    bg-clip-text text-transparent logo-font">S</span>

                    <span className="text-black">tudy</span>

                    <span className="bg-gradient-to-r from-[#2970fe] to-[#2937fe] 
                    bg-clip-text text-transparent logo-font">M</span>

                    <span className="text-black">ate</span>
                </NavLink>
            </div>

            {/* CENTER — DESKTOP NAV (HIDE ON SMALL, SHOW ON md+) */}
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>

            {/* RIGHT
            <div className="navbar-end gap-5">
                <div>
                    <input
                        onChange={(e) => handleTheme(e.target.checked)}
                        type='checkbox'
                        defaultChecked={localStorage.getItem('theme') === "dark"}
                        className='toggle'
                    />


                </div>
                {user ? (
                    <button onClick={handleSignOut} className="btn">Sign Out</button>
                ) : (
                    <div className="flex gap-3">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>
                )}
            </div> */}



            {/* RIGHT SIDE */}
            <div className="navbar-end gap-5">

                {/* Theme Toggle */}
                <input
                    onChange={(e) => handleTheme(e.target.checked)}
                    type="checkbox"
                    defaultChecked={localStorage.getItem("theme") === "dark"}
                    className="toggle"
                />

                {/* If user is logged in */}
                {user ? (
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    src={user?.photoURL || "https://i.ibb.co/4pDNDk1/blank-profile.png"}
                                    alt="User"
                                />
                            </div>
                        </label>

                        {/* DROPDOWN MENU */}
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <Link to="/profile" className="justify-between">
                                    Profile
                                </Link>
                            </li>

                            <li>
                                <button onClick={handleSignOut}>Logout</button>
                            </li>
                        </ul>
                    </div>
                ) : (
                    // If NO USER → Show Login & Register buttons
                    <div className="flex gap-3">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>
                )}
            </div>

        </div>
    );
};

export default Navbar;





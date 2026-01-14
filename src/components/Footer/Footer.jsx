import React from "react";
import { Link } from "react-router-dom";
import footerLogo from '../../assets/studymateLogo.jpeg'

const Footer = () => {
    return (
        <footer className="bg-neutral text-neutral-content px-10 py-14">
            <div className="container mx-auto flex flex-col sm:flex-row justify-between gap-10">

                {/* LOGO + PROJECT NAME + DESCRIPTION */}
                <aside className="flex flex-col items-start">
                    <div className="flex items-center gap-3">
                        <img
                            src={footerLogo}
                            alt="Logo"
                            className="w-12 h-12 rounded-full object-cover"
                        />
                        <h2 className="text-2xl font-bold">StudyMate</h2>
                    </div>

                    <p className="mt-3 max-w-sm">
                        StudyMate is a smart learning partner platform designed to
                        connect students, share knowledge, and make studying easier
                        and more enjoyable.
                    </p>
                </aside>

                {/* SOCIAL LINKS */}
                <nav>
                    <h6 className="footer-title mb-3">Follow Us</h6>
                    <div className="grid grid-flow-col gap-4">

                        {/* Facebook */}
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current"
                            >
                                <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" />
                            </svg>
                        </a>

                        {/* Twitter */}
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current"
                            >
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045C7.823 8.083 4.195 6.123 1.766 3.144c-1.29 2.213-.669 5.108 1.523 6.574C2.48 9.692 1.72 9.47 1.057 9.101c-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419C6.313 18.62 3.705 19.345 1.093 19.037 3.272 20.434 5.861 21.25 8.641 21.25c9.142 0 14.307-7.721 13.995-14.646A9.935 9.935 0 0024 4.557z" />
                            </svg>
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current"
                            >
                                <path d="M4.98 3.5C4.98 5.14 3.6 6.5 2 6.5S-.98 5.14-.98 3.5C-.98 1.86.4.5 2 .5s2.98 1.36 2.98 3zM.02 24h4V7h-4v17zm7.98 0h4v-8.5c0-4.72 6-5.1 6 0V24h4V13.5c0-9.14-10-8.8-10 0V24z" />
                            </svg>
                        </a>

                        {/* Instagram */}
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current"
                            >
                                <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .3 2.5.5.6.3 1 .6 1.5 1.1.5.5.8.9 1.1 1.5.2.5.4 1.3.5 2.5.1 1.2.1 1.6.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2-.5 2.5-.3.6-.6 1-1.1 1.5-.5.5-.9.8-1.5 1.1-.5.2-1.3.4-2.5.5-1.2.1-1.6.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.3-2.5-.5-.6-.3-1-.6-1.5-1.1-.5-.5-.8-.9-1.1-1.5-.2-.5-.4-1.3-.5-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-2 .5-2.5.3-.6.6-1 1.1-1.5C4.4 2.9 4.8 2.6 5.4 2.3c.5-.2 1.3-.4 2.5-.5C8.8 2.2 9.2 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7 .1c-1.3.1-2.3.3-3.2.7-.9.4-1.6.9-2.3 1.6C.9 3.1.4 3.8 0 4.7c-.4.9-.6 1.9-.7 3.2C-.8 8.3-.8 8.7-.8 12s0 3.7.1 4.9c.1 1.3.3 2.3.7 3.2.4.9.9 1.6 1.6 2.3.7.7 1.4 1.2 2.3 1.6.9.4 1.9.6 3.2.7 1.3.1 1.7.1 4.9.1s3.6 0 4.9-.1c1.3-.1 2.3-.3 3.2-.7.9-.4 1.6-.9 2.3-1.6.7-.7 1.2-1.4 1.6-2.3.4-.9.6-1.9.7-3.2.1-1.3.1-1.7.1-4.9s0-3.6-.1-4.9c-.1-1.3-.3-2.3-.7-3.2-.4-.9-.9-1.6-1.6-2.3-.7-.7-1.4-1.2-2.3-1.6-.9-.4-1.9-.6-3.2-.7C15.7 0 15.3 0 12 0z"></path>
                                <path d="M12 5.8A6.2 6.2 0 105 12a6.2 6.2 0 007-6.2zm0 10A3.8 3.8 0 118.2 12 3.8 3.8 0 0112 15.8zm5.8-10.6a1.44 1.44 0 11-1.44-1.44 1.44 1.44 0 011.44 1.44z"></path>
                            </svg>
                        </a>
                    </div>
                </nav>
            </div>

            {/* COPYRIGHT */}
            <div className="text-center mt-10 border-t border-gray-600 pt-5">
                <p>© {new Date().getFullYear()} StudyMate. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;



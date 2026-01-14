import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const RootLayout = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto'>
                {/* Navbar must NOT be inside max-w container */}
                <Navbar />

                <div className="max-w-7xl mx-auto">
                    <Outlet />
                </div>


            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};


export default RootLayout;


import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const RootLayout = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto'>
                <Navbar></Navbar>
            </div>
            <div className='max-w-7xl mx-auto'>
                <Outlet></Outlet>
            </div>
            <div className='w-full'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default RootLayout;


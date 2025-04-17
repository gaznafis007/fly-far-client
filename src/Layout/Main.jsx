import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const Main = () => {
    return (
        <div>
            <Navbar/>
            <div
            style={{
                backgroundColor: '#EDF2F6',
                padding: '0 80px'
            }}>
            <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Main;
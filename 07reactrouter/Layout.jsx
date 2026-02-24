import React from 'react';
import Header from './src/components/header/Header';
import Footer from './src/components/footer/Footer';
import { Outlet } from 'react-router-dom';

export default function Layout () {
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    );
}
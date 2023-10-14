import React, { Suspense, Component } from 'react';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
    return (<>
        <Header />
        <div className="w-full">
            {children}
            <Outlet />
        </div>
        <Footer />
    </>);
}
export default Layout;
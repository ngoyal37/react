import React from 'react';
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout = ({ children }) => {
    return (<>
        <Header />
        <div className="container min-h-[350px]"> {/* container settings in :- tailwind.config.js */}
            {children}
            <Outlet />
        </div>
        <Footer />
    </>);
}
export default Layout;
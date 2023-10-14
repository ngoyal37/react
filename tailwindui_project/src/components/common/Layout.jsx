import React from 'react';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
    return (<>
        <Header />
        <div className="mx-auto p-4 w-full max-w-[1240px] min-h-[350px]">
            {children}
            <Outlet />
        </div>
        <Footer />
    </>);
}
export default Layout;
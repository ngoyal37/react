import React from 'react';
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Container from './Container';

const Layout = ({ children }) => {
    return (<>
        <Header />
        <Container className="min-h-[350px]">
            {children}
            <Outlet />
        </Container>
        <Footer />
    </>);
}
export default Layout;
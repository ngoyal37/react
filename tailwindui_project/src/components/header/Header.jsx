import React from 'react';
import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <header className="bg-[#2699fb] p-4">
            <div className="mx-auto max-w-[1240px]">
                <nav className="w-100">
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About Us</NavLink></li>
                        <li><NavLink to="/product">Product</NavLink></li>
                        <li><NavLink to="/contact">Contact Us</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
export default Header;




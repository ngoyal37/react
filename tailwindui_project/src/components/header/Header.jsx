import React from 'react';
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="py-4 bg-[#2699fb]">
            <div className="container flex items-center"> {/* container settings in :- tailwind.config.js */}
                <div className="font-medium text-4xl"><Link to="/">Logo</Link></div>
                <div className="ml-auto">
                    <ul className='inline-flex gap-[18px]'>
                        <li className='text-white'><NavLink to="/">Home</NavLink></li>
                        <li className='text-white'><NavLink to="/about">About Us</NavLink></li>
                        <li className='text-white'><NavLink to="/product">Product</NavLink></li>
                        <li className='text-white'><NavLink to="/contact">Contact Us</NavLink></li>
                    </ul>
                </div>

            </div>
        </header>
    );
}
export default Header;




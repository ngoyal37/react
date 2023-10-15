import React from 'react';
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom"
import Container from '../common/Container';

const Header = () => {
    return (
        <header className="py-4 bg-[#2699fb]">
            <Container className="flex items-center">
                <div className="font-medium text-4xl"><Link to="/">Logo</Link></div>
                <div className="ml-auto">
                    <ul className='inline-flex'>
                        <li className='mx-2 text-white'><NavLink to="/">Home</NavLink></li>
                        <li className='mx-2 text-white'><NavLink to="/about">About Us</NavLink></li>
                        <li className='mx-2 text-white'><NavLink to="/product">Product</NavLink></li>
                        <li className='mx-2 text-white'><NavLink to="/contact">Contact Us</NavLink></li>
                    </ul>
                </div>

            </Container>
        </header>
    );
}
export default Header;




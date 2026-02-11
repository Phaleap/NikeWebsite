import React, { forwardRef } from 'react'; 
import { MdOutlinePerson } from "react-icons/md";
import { RiShoppingBagLine } from "react-icons/ri";
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = forwardRef((props, ref) => {
    return (
        <div ref={ref}> 
            <nav>
                <h1 className="logo">NIKE</h1>
                <ul className="nav-links">
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/about">ABOUT</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                    <li><Link to="/shop">SHOP</Link></li>
                    <li><Link to="/service">SERVICE</Link></li>
                    <li><Link to="/shopDetails">SHOP DETAILS</Link></li>
                </ul>
                <div className='shopXLog'>
                    <Link to="/account"><MdOutlinePerson style={{ color: "white", fontSize: "20px" }} /></Link>|
                    <Link to="/cart"><RiShoppingBagLine style={{ color: "white", fontSize: "20px" }} /></Link>
                </div>
            </nav>
        </div>
    )
});

export default Navbar;
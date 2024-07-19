import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="dropdown">
            <button className="dropdown-toggle" onClick={toggleDropdown}>
                Toggle Dropdown
            </button>
            {isOpen && (
                <ul className="dropdown-menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Blank">Blank</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
            )}
        </div>
    );

};

export default Dropdown;
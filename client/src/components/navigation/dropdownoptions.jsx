import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

const DropdownC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="dropdown">
            <button className="dropdown-toggle" onClick={toggleDropdown}>
                Industries
            </button>
            {isOpen && (
                <ul className="dropdown-menu">    
                    <li><Link to="/food">Food</Link></li>
                    <li><Link to="/hospitality">Hospitality</Link></li>
                    <li><Link to="/tourism">Tourism</Link></li>
                </ul>
            )}
        </div>
    );

};

export default DropdownC;
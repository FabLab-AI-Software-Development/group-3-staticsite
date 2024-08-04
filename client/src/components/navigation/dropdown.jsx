import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <button className="" onClick={toggleDropdown}>
                Toggle Dropdown
            </button>
            {isOpen && (
                <ul className="dropdown-menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Company">Companies</Link></li>
                    <li><Link to="/Employee">Employees</Link></li>
                    <li><Link to="/Question">Questions</Link></li>
                    <li><Link to="/ChatInput">Chatbot</Link></li>
                </ul>
            )}
        </div>
    );

};

export default Dropdown;
import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div class="wrapper">
            <h1>
            Horizon Human Resources
            </h1>
            <ul class="list">
                <li class="item"><Link to="/">Home</Link></li>
                <li class="item"><Link to="/Company">Companies</Link></li>
                <li class="item"><Link to="/Employee">Employees</Link></li>
                <li class="item"><Link to="/Question">Chatbot</Link></li>
                <li class="item"><Link to="/FAQs">FAQs</Link></li>
            </ul>
        </div>
    );

};

export default Navigation;
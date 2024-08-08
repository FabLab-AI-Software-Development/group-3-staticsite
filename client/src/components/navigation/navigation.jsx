import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div class="wrapper">
            <ul class="list">
                <li class="item"><Link to="/">Home</Link></li>
                <li class="item"><Link to="/Company">Companies</Link></li>
                <li class="item"><Link to="/Employee">Employees</Link></li>
                <li class="item"><Link to="/Question">Questions</Link></li>
                <li class="item"><Link to="/ChatInput">Chatbot</Link></li>
            </ul>
            <div class="content">
                <h1>
                Horizon Human Resources
                </h1>
                <h3>
                    Welcome to Your Company Portal!<br/><br/>
                    Unlock the full potential of your HR experience with our Company Portal. Designed to streamline your HR functions, our portal provides you with direct access to a suite of tools and resources tailored for efficiency and ease.<br/><br/>
                    Connect with our intelligent HR assistant chatbot, here to support you with tasks ranging from gathering essential employee information to answering your HR queries. Simplify your workflow, enhance communication, and ensure you have the right resources at your fingertips.
                </h3>
            </div>
        </div>
    );

};

export default Navigation;
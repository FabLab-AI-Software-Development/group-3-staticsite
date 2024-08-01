import React from 'react';
import Dropdown from '../components/navigation/dropdown';

const Blank = () => {
    return (
        <div>
           <Dropdown />
           <h1>Training Topics</h1>
           <p>Human Resources-Recruitment</p>
           <p>Human Resources-Performance Management</p>
           <p>Human Resources-Conflict Resolution</p>
           <p>Human Resources-Employee Engagement</p>
           <p>Food-Bussing & Tablesetting</p>
           <Dropdown />
        </div>
    );
};

export default Blank;
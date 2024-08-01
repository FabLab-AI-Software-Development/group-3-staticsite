import React, { startTransition } from "react";

import Dropdown from "../components/navigation/dropdown";
import DropdownC from "../components/navigation/dropdownoptions";

const Contact = () => {
    return (
        <div>
            <Dropdown />
            <h1>Contact Us</h1>
            <p>Welcome to the contact page!</p>

            <DropdownC />
        </div>
    )
}

export default Contact
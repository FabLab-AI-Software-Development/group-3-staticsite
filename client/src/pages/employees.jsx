import React, { useEffect, useState } from "react";
import { fetchEmployees, submitEmployeeData} from "../routes/api";

const Employee = () => {
    const [employees, setEmployees] = useState([]);
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [companyId, setCompanyId] = useState(1);

    const submitEmployee = async (name, role, companyId) => {
        console.log("submitEmployeeData", name, role, companyId);
        const employeeData = {
            name: name,
            role: role,
            companyId: companyId,
        };
        try {
            await submitEmployeeData(employeeData);
            console.log("Employee data submitted");
        } catch (error) {
            console.error("Error submitting employee data:", error);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedEmployees = await fetchEmployees();
                console.log("Employees", fetchedEmployees);
                setEmployees(fetchedEmployees);
            } catch (error) {
                console.error("Error fetching employees:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Employees</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter employee name" />
            <input type="text" value={role} onChange={(e) => setRole(e.target.value)} placeholder="Enter employee role" />
            <input type="number" value={companyId} onChange={(e) => setCompanyId(e.target.value)} placeholder="Enter company id" />
    
            <button onClick={() => submitEmployee(name, role, companyId)}>Submit</button>
            {employees.length > 0 ? (
                employees.map((employee) => (
                    <p key={employee.id}>{employee.name} {employee.role}</p>
                ))
            ) : (
                <p>No employees found</p>
            )}
        </div>
    );
};

export { Employee };
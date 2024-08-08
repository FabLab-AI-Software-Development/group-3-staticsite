import React, { useEffect, useState } from "react";
import { fetchEmployees, fetchCompanies, submitEmployeeData} from "../routes/api";
import Navigation from '../components/navigation/navigation';

const Employee = () => {
    const [employees, setEmployees] = useState([]);
    const [companies, setCompanies] = useState([]);
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [companyId, setCompanyId] = useState(1);

    const submitEmployee = async (name, role, companyId) => {
        console.log("submitEmployeeData", name, role, companyId);
        const employeeData = {
            name: name,
            role: role,
            companyId: parseInt(companyId),
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

                const fetchedCompanies = await fetchCompanies();
                console.log("Companies", fetchedCompanies);
                setCompanies(fetchedCompanies);
            } catch (error) {
                console.error("Error fetching employees:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <Navigation />
            <h2>Add Employee</h2>
            <input class="text-input" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter employee name" />
            <input class="text-input" type="text" value={role} onChange={(e) => setRole(e.target.value)} placeholder="Enter employee role" />
            <select class="text-input" value={companyId} onChange={(e) => setCompanyId(e.target.value)}>
                {companies.map((company) => (
                    <option key={company.id} value={company.id}>
                        {company.name}
                    </option>
                ))}
            </select>
            <button onClick={() => submitEmployee(name, role, companyId)}>Submit</button>
            
            <h2>Employees</h2>
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
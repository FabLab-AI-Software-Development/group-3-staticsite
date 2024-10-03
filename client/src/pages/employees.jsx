import React, { useEffect, useState } from "react";
import { fetchEmployees, fetchCompanies, submitEmployeeData, fetchEmployeesByCompany} from "../routes/api";
import Navigation from '../components/navigation/navigation';

const Employee = () => {
    const [employees, setEmployees] = useState([]);
    const [companies, setCompanies] = useState([]);
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [companyId, setCompanyId] = useState(1)
    const [location, setLocation] = useState("");

    const submitEmployee = async (name, role, companyId, location) => {
        console.log("submitEmployeeData", name, role, companyId, location);
        const employeeData = {
            name: name,
            role: role,
            companyId: parseInt(companyId),
            location: location
        };
        try {
            await submitEmployeeData(employeeData);
            console.log("Employee data submitted");

            const fetchedEmployees = await fetchEmployeesByCompany(companyId);
            console.log("Employees", fetchedEmployees);
            setEmployees(fetchedEmployees);
        } catch (error) {
            console.error("Error submitting employee data:", error);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedCompanies = await fetchCompanies();
                console.log("Companies", fetchedCompanies);
                setCompanies(fetchedCompanies);
                
                const fetchedEmployees = await fetchEmployeesByCompany(companyId);
                console.log("Employees", fetchedEmployees);
                setEmployees(fetchedEmployees);
            } catch (error) {
                console.error("Error fetching employees:", error);
            }
        };
        fetchData();
    }, [ companyId ]);

    return (
      <div>  
        <div class="left-div">
        <Navigation />
        </div>
        <div class="centered-div">
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
            <input class="text-input" type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Enter employee location" />
            <button class="submitButton" onClick={() => submitEmployee(name, role, companyId, location)}>Submit</button>
            
            <br/><br/>  
            <h2>Employees</h2>
            <br/>
            <table id="customers">
                <tr>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Location</th>
                </tr>  
            {employees.length > 0 ? (
                employees.map((employee) => (
                    <tr key={employee.id}>
                        <td>{employee.name}</td> 
                        <td>{employee.role}</td>
                        <td>{employee.location}</td>
                    </tr>
                ))
            ) : (
                <p>No employees found</p>
            )}
            </table>
        </div>
    </div>
    );
};

export { Employee };
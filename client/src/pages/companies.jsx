import React, { useEffect, useState } from "react";
import { fetchCompanies, submitCompanyData} from "../routes/api";
import Navigation from '../components/navigation/navigation';

const Company = () => {
    const [companies, setCompanies] = useState([]);
    const [name, setName] = useState("");
    const [industry, setIndustry] = useState("");
    
    const submitCompany = async (name, industry) => {
        console.log("submitCompanyData", name, industry);
        const companyData = {
            name: name,
            industry: industry
        };
        try {
            await submitCompanyData(companyData);
            console.log("Compant data submitted");
            const fetchedCompanies = await fetchCompanies();
            console.log("Companies", fetchedCompanies);
            setCompanies(fetchedCompanies);
        } catch (error) {
            console.error("Error submitting company data:", error);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedCompanies = await fetchCompanies();
                console.log("Companies", fetchedCompanies);
                setCompanies(fetchedCompanies);
            } catch (error) {
                console.error("Error fetching companies:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div class="centered-div">
            <Navigation />
            <h2>Add Company</h2>
            <input class="text-input" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter company name" />
            <input class="text-input" type="text" value={industry} onChange={(e) => setIndustry(e.target.value)} placeholder="Enter industry" />
            <button class="submitButton" onClick={() => submitCompany(name, industry)}>Submit</button>
            
            <br/><br/>
            <h2>Companies</h2>
            <br/>
            <table id="customers">
                <tr>
                    <th>Name</th>
                    <th>Industry</th>
                </tr>    
            {companies.length > 0 ? (
                companies.map((company) => (
                    <tr key={company.id}>
                        <td>{company.name}</td> 
                        <td>{company.industry}</td>
                    </tr>
                ))
            ) : (
                <p>No companies found</p>
            )}
            </table>
        </div>
    );
};

export { Company };
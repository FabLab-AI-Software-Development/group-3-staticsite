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
        <div>
            <Navigation />
            <h1>Companies</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter company name" />
            <input type="text" value={industry} onChange={(e) => setIndustry(e.target.value)} placeholder="Enter industry" />
            <button onClick={() => submitCompany(name, industry)}>Submit</button>

            {companies.length > 0 ? (
                companies.map((company) => (
                    <p key={company.id}>{company.name} {company.industry}</p>
                ))
            ) : (
                <p>No companies found</p>
            )}
        </div>
    );
};

export { Company };
import React, { useEffect, useState } from "react";
import { fetchQuestions, fetchEmployees, fetchQuestionsByEmployee, submitQuestionData} from "../routes/api";
import { fetchOpenAI } from "../routes/openai-client";
import Navigation from '../components/navigation/navigation';

const Question = () => {
    const [questions, setQuestions] = useState([]);
    const [employees, setEmployees] = useState([]);
    const [request, setRequest] = useState("");
    const [employeeId, setEmployeeId] = useState(1);
    
    const fetchOpenAIResponse = async (message, employeeId) => {
        try {
            console.log("Question: ", message);
            await fetchOpenAI(message, employeeId);

            const fetchedQuestions = await fetchQuestionsByEmployee(employeeId);
            console.log("Questions", fetchedQuestions);
            setQuestions(fetchedQuestions); 
        } catch (error) {
            console.error("Error fetching companies:", error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedEmployees = await fetchEmployees();
                console.log("Employees", fetchedEmployees);
                setEmployees(fetchedEmployees);

                const fetchedQuestions = await fetchQuestionsByEmployee(employeeId);
                console.log("Questions", fetchedQuestions);
                setQuestions(fetchedQuestions);
            } catch (error) {
                console.error("Error fetching questions:", error);
            }
        };
        fetchData();
    }, [ employeeId ]);

    return (
        <div>
            <p class="left-div">
                <Navigation />
            </p>
            <p class="centered-div">
                <h2>Ask a Question</h2>
                <input class="text-input" type="text" value={request} onChange={(e) => setRequest(e.target.value)} placeholder="Enter your question" />
                
                <select class="text-input" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)}>
                    {employees.map((employee) => (
                        <option key={employee.id} value={employee.id}>
                            {employee.name}
                        </option>
                    ))}
                </select>
                <button class="submitButton" onClick={() => fetchOpenAIResponse(request, employeeId)}>Submit</button>
            </p>

            {questions.length > 0 ? (
                questions.map((question) => (
                    <div class="chat">
                        <div class="msg sent">{question.request}<br/></div>
                        <div class="msg rcvd">{question.response}</div>
                    </div>
                ))
            ) : (
                <p>No questions found</p>
            )}
        </div>
    );
};

export { Question };
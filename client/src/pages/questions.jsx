import React, { useEffect, useState } from "react";
import { fetchQuestions, fetchEmployees, submitQuestionData} from "../routes/api";
import { fetchOpenAI } from "../routes/openai-client";
import Navigation from '../components/navigation/navigation';

const Question = () => {
    const [questions, setQuestions] = useState([]);
    const [employees, setEmployees] = useState([]);
    const [request, setRequest] = useState("");
    const [response, setResponse] = useState("");
    const [employeeId, setEmployeeId] = useState(1);
    
    const fetchOpenAIResponse = async (message, employeeId) => {
        try {
            console.log("Question: ", message);
            await fetchOpenAI(message, employeeId);
        } catch (error) {
            console.error("Error fetching companies:", error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedQuestions = await fetchQuestions();
                console.log("Questions", fetchQuestions);
                setQuestions(fetchedQuestions);
                const fetchedEmployees = await fetchEmployees();
                console.log("Employees", fetchedEmployees);
                setEmployees(fetchedEmployees);
            } catch (error) {
                console.error("Error fetching questions:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <Navigation />
            <h2>Ask a Question</h2>
            <input type="text" value={request} onChange={(e) => setRequest(e.target.value)} placeholder="Enter your question" />
            
            <select value={employeeId} onChange={(e) => setEmployeeId(e.target.value)}>
                {employees.map((employee) => (
                    <option key={employee.id} value={employee.id}>
                        {employee.name}
                    </option>
                ))}
            </select>
            <button onClick={() => fetchOpenAIResponse(request, employeeId)}>Submit</button>

            <h2>Questions</h2>
            {questions.length > 0 ? (
                questions.map((question) => (
                    <div class="chat">
                        <p key={question.id}>
                         <div class="msg sent">{question.request}<br/></div>
                         <div class="msg rcvd">{question.response}</div>
                        </p>
                    </div>
                ))
            ) : (
                <p>No questions found</p>
            )}
        </div>
    );
};

export { Question };
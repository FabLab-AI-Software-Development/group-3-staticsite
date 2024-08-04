import React, { useEffect, useState } from "react";
import { fetchQuestions, submitQuestionData} from "../routes/api";
import Dropdown from '../components/navigation/dropdown';

const Question = () => {
    const [questions, setQuestions] = useState([]);
    const [request, setRequest] = useState("");
    const [response, setResponse] = useState("");
    const [employeeId, setEmployeeId] = useState(1);
    
    const submitQuestion = async (request, response, employeeId) => {
        console.log("submitQuestionData", request, response, employeeId);
        const questionData = {
            request: request,
            response: response,
            employeeId: employeeId,
        };
        try {
            await submitQuestionData(questionData);
            console.log("Question data submitted");
        } catch (error) {
            console.error("Error submitting question data:", error);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedQuestions = await fetchQuestions();
                console.log("Questions", fetchQuestions);
                setQuestions(fetchedQuestions);
            } catch (error) {
                console.error("Error fetching questions:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <Dropdown />
            <h1>Questions</h1>
            <input type="text" value={request} onChange={(e) => setRequest(e.target.value)} placeholder="Enter your question" />
            <input type="number" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} placeholder="Enter employee id" />
            <button onClick={() => submitQuestion(request, response, employeeId)}>Submit</button>

            {questions.length > 0 ? (
                questions.map((question) => (
                    <p key={question.id}>{question.request}<br/>{question.response}</p>
                ))
            ) : (
                <p>No questions found</p>
            )}
        </div>
    );
};

export { Question };
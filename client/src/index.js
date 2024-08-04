import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import App from './App';
import ChatInput from './components/chat/chatinput';
import { Employee } from './pages/employees';
import { Company } from './pages/companies';
import { Question } from './pages/questions';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Company" element={<Company />} />
        <Route path="/Employee" element={<Employee />} />
        <Route path="/Question" element={<Question />} />
        <Route path="/ChatInput" element={<ChatInput />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

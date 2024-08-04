import { axiosUtil } from "./axios-client";

const employeeSlug = '/employees';
const companySlug = '/companies';
const questionSlug = '/questions';

async function fetchEmployees() {
    try {
            const response = await axiosUtil.get(employeeSlug);
            console.log("getEmployees", response.data);
            return response.data;
    } catch (error) {
            console.error(error);
    }
}
async function fetchCompanies() {
    try {
            const response = await axiosUtil.get(companySlug);
            console.log("getCompanies", response.data);
            return response.data;
    } catch (error) {
            console.error(error);
    }
}

async function fetchQuestions() {
    try {
            const response = await axiosUtil.get(questionSlug);
            console.log("getQuestions", response.data);
            return response.data;
    } catch (error) {
            console.error(error);
    }
}

async function submitEmployeeData(employeeData) {

    console.log("Employee==========================", employeeData);
    try {
        const response = await axiosUtil.post(employeeSlug + '/', employeeData);
        console.log("Response", response);
    } catch (error) {
        console.error("Error submitting employee data:", error);
    }
}

async function submitCompanyData(companyData) {   
    console.log("Company==========================", companyData);
    try {
        const response = await axiosUtil.post(companySlug + '/', companyData);
        console.log("Response", response);
    } catch (error) {
        console.error("Error submitting company data:", error);
    }
}

async function submitQuestionData(questionData) {
    console.log("Question==========================", questionData);
    try {
        const response = await axiosUtil.post(questionSlug + '/', questionData);
        console.log("Response", response);
    } catch (error) {
        console.error("Error submitting question data:", error);
    }
}

export {fetchEmployees, fetchCompanies, fetchQuestions, submitEmployeeData, submitCompanyData, submitQuestionData};
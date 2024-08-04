import { axiosUtil } from "./axios-client";

const userSlug = '/users';
const authorSlug = '/authors';
const employeeSlug = '/employees';


async function fetchUsers() {

    try {
        const response = await axiosUtil.get(userSlug);
        console.log("getUsers", response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

async function fetchEmployees() {
    try {
            const response = await axiosUtil.get(employeeSlug);
            console.log("getEmployees", response.data);
            return response.data;
    } catch (error) {
            console.error(error);
    }
}


async function submitUserData(userData) {

    console.log("User==========================", userData);
    try {
        const response = await axiosUtil.post(userSlug + '/signup', userData);
        console.log("Response", response);
    } catch (error) {
        console.error("Error submitting user data:", error);
    }
}

async function submitEmployeeData(employeeData) {

    console.log("Employee==========================", employeeData);
    try {
        const response = await axiosUtil.post(employeeSlug + '/hire', employeeData);
        console.log("Response", response);
    } catch (error) {
        console.error("Error submitting employee data:", error);
    }
}

export {fetchUsers, submitUserData, fetchEmployees, submitEmployeeData};
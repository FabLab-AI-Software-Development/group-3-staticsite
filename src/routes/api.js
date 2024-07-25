import { axiosUtil } from "./axios-client";

const userSlug = '/users';
const authorSlug = '/authors';


async function fetchUsers() {

    try {
        const response = await axiosUtil.get(userSlug);
        console.log("getUsers", response.data);
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

export {fetchUsers, submitUserData};
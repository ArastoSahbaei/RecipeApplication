import http from "../api";

const registerNewUser = (newUserData: object) => {
    return http.post(`/user/register`, newUserData);
};

const login = (loginData: object) => {
    return http.post(`/user/login`, loginData)
}

export default {
    registerNewUser,
    login
};
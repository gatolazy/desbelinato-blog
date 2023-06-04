import axios, { AxiosResponse } from "axios";

import API_ROUTES from "../enums/ApiRoutes";
import Credentials from "../models/Credentials";

if (process.env.REACT_APP_BACKEND_API_BASE_URL) {
    axios.defaults.baseURL =
        process.env.REACT_APP_BACKEND_API_BASE_URL + "/api";
    console.log({ backend: axios.defaults.baseURL });
}

function _setToken(token: string) {
    axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
}

function _removeToken() {
    delete axios.defaults.headers.common["Authorization"];
}

async function _signin(credentials: Credentials): Promise<AxiosResponse> {
    return await axios({
        method: "POST", url: API_ROUTES.LOGIN,
        data: {
            email: credentials.email,
            password: credentials.password,
        },
    });
}

async function _signout(): Promise<AxiosResponse> {
    return await axios({
        method: "GET", url: API_ROUTES.LOGOUT,
    });
}

async function _getAuthStatus() {
    return await axios({ method: "GET", url: API_ROUTES.AUTH_STATUS });
}

async function _getUser() {
    return await axios({ method: "GET", url: API_ROUTES.USER });
}

async function _getCsrfCookie() {
    return await axios({ method: "GET", url: API_ROUTES.CSRF_COOKIE });
}

const Backend = {
    setToken: _setToken,
    removeToken: _removeToken,
    getCsrfCookie: _getCsrfCookie,
    signin: _signin,
    signout: _signout,
    getAuthStatus: _getAuthStatus,
    getUser: _getUser,
};

export default Backend;

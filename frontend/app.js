
const BACKEND_API = {
    CSRF_COOKIE: '/api/sanctum/csrf-cookie',
    AUTH_STATUS: '/api/auth/status',
    LOGIN: '/api/auth/login',
    USER: '/api/user'
};

axios.defaults.withCredentials = true;

const getAuthStatus = async () => {
    try {
        const authStatus = await axios.get(`${BACKEND_API.AUTH_STATUS}`);
        console.log({ authStatus });
        return authStatus;
    } catch (errors) {
        console.error(errors);
    }
};

const getCsrfCookie = async () => {
    try {
        const response = await axios.get(`${BACKEND_API.CSRF_COOKIE}`);
        console.log({ response, axios });
        return response;
    } catch (errors) {
        console.error(errors);
    }
};

const getUser = async () => {
    try {
        const response = await axios.get(`${BACKEND_API.USER}`);
        console.log({ response });
        return response;
    } catch (errors) {
        console.error(errors);
    }
};

/**
 * 
 * @param {Object<{email, password}>} credentials 
 * @returns {Object<{status, message, token}>} 
 */
const login = async ({ email, password }) => {
    try {
        const response = await axios.post(
            `${BACKEND_API.LOGIN}`, { email, password }
        );
        console.log({ response });
        return response;
    } catch (errors) {
        console.error(errors);
    }
};

const frontend = async () => {
    await getAuthStatus();
    await getCsrfCookie();
    let user = await getUser();
    console.info('User was logged in ?', { user });
    if (!user) {
        const credentials = {
            email: "admin@desbelinato.it",
            password: "password"
        }
        const authResponse = await login(credentials);
        await getCsrfCookie();
        user = await getUser();
        console.info({ authResponse });
    }
    console.info({ user });
}


(async () => await frontend())();
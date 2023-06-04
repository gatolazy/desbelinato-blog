import { useState } from "react";
import Credentials from "../models/Credentials";
import Backend from "./Backend";
import Account from "../models/Account";
import { AxiosResponse } from "axios";

function setCookie(name, value, options) {

    options = {
        path: '/',
        // add other defaults here if necessary
        ...options
    };

    if (options?.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }

    document.cookie = updatedCookie;
}

// returns the cookie with the given name,
// or undefined if not found
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function deleteCookie(name) {
    setCookie(name, "", {
        'max-age': -1
    })
}

function AuthService() {
    const [errors, setErrors] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [account, setAccount] = useState<Account>(null);



    async function signin(credentials: Credentials): Promise<Account> {
        try {
            setIsLoading(true);
            await Backend.getCsrfCookie();
            const resp: AxiosResponse = await Backend.signin(credentials);
            console.log('RESP:', resp);
            if (resp?.status === 200) {
                return setAccountInfo(resp);
            } else {
                console.error(resp);
            }
            // }
        } catch (err) {
            console.error("Some error occured during signing up: ", err);
            setErrors(err);
        } finally {
            setIsLoading(false);
        }
    }

    const setAccountInfo = (loginResponse: AxiosResponse): Account => {
        const accountData: Account = {
            id: loginResponse?.data?.user?.id,
            email: loginResponse?.data?.user?.email,
            name: loginResponse?.data?.user?.name
        };
        setCookie('user', JSON.stringify(accountData), { secure: true, 'max-age': 3600 });
        setAccount({ ...accountData });
        return accountData;
    }

    const getAccountInfo = (): Account => {
        if (!account) {
            const accountInfoData = getCookie('user');
            if (accountInfoData) {
                setAccount(JSON.parse(accountInfoData));
                return JSON.parse(accountInfoData);
            }
            return null;
        }
        return account?.id ? { ...account } : null;
    }

    const signout = () => {
        if (getAccountInfo()) {
            Backend.signout()
        }
        deleteCookie('user');
        setAccount(null);
    }

    function isLogged() {
        console.log({ account });
        return account ? true : false;
    }

    return {
        signin,
        signout,
        //errors,
        isLoading,
        getAccountInfo,
        isLogged
    };
}

export default AuthService;

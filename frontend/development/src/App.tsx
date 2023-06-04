import React, { useReducer } from "react";
import logo from "./logo.svg";
import "./App.css";
import Router from "./Router";
import UserContext from "./contexts/UserContext";
import Account from "./models/Account";
import AuthService from "./services/AuthService";


function reducer(currentState: Account, newState: Account) {
    if (!newState?.id) {
        return null;
    }
    return { ...newState };
}

function App() {
    const { getAccountInfo } = AuthService();
    const [user, setUser] = useReducer(reducer, getAccountInfo());

    return (
        <>
            <UserContext.Provider value={{ user, setUser }}>
                <Router />
            </UserContext.Provider>
        </>
    );
}

export default App;

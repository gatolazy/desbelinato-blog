import { useNavigate } from "react-router-dom";
import AuthService from "../services/AuthService";
import UserContext from "../contexts/UserContext";
import React, { useEffect } from "react";

function Logout() {
    const { signout } = AuthService();
    const { setUser, user } = React.useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (!user) {
            return
        }
        signout();
        setUser(null);
        navigate('/login');
    });

    return (<></>);
}

export default Logout;
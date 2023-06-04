import { ReactElement, useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthService from "../services/AuthService";
import UserContext from "../contexts/UserContext";

export type RouteGuardProps = {
    redirectPath?: string,
    children?: ReactElement
}

function RouteGuard({ children, redirectPath = '/login' }: RouteGuardProps) {
    const { getAccountInfo } = AuthService();

    function hasJWT() {
        let flag = false;

        //check user has JWT token
        getAccountInfo() ? (flag = true) : (flag = false);

        return flag;
    }

    if (!hasJWT()) {
        return <Navigate to={redirectPath} replace />;
    }

    return children ? children : <Outlet />;
};

export default RouteGuard;

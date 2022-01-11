import React, {useContext} from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const PrivateRoute = () => {
    const user = useContext(UserContext)

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return user.loggedIn ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute;
import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';
const ProviderRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    if (loading) {
        return <span className="loading loading-spinner text-warning"></span>
    }

    if (user) {
        return children;
    }
    return (
        <Navigate to="/"></Navigate>
    );
};

export default ProviderRoute;
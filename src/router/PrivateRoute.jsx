import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import PropTypes from 'prop-types';
import { AuthContext } from '../auth/context/AuthContext';



export const PrivateRoute = ({ children }) => {

    const { logged } = useContext( AuthContext );

    // recordar la ultima pagina visitada 
    const { pathname, search } = useLocation();
    // recordar la ultima pagina visitada 
    const lastPath = pathname + search;
    localStorage.setItem('lastPath', lastPath );
    

    return (logged)
        ? children
        : <Navigate to="/login" />
}
PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};
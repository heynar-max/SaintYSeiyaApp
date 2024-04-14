import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import PropTypes from 'prop-types';
import { AuthContext } from '../auth/context/AuthContext';



export const PublicRoute = ({ children }) => {

    const { logged } = useContext( AuthContext );

    // !logged si no esta autenticado muestre children : si no / 
    return (!logged)
        ? children
        : <Navigate to="/" />
}
PublicRoute.propTypes = {
    children: PropTypes.node.isRequired,
};
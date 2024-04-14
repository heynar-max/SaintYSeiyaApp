import { useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';
import PropTypes from 'prop-types';



export const AuthProvider = ({ children }) => {
    
  // saber que usuario esta conectado para darle el permiso 
  const [ authState, dispatch ] = useReducer( authReducer, {}, );

  


  


  return (
    <AuthContext.Provider value={{
    }}>
        { children }
    </AuthContext.Provider>
  );
}
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
import { useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';
import PropTypes from 'prop-types';
import { types } from '../types/types';

// mantener usuario activo
const init = () => {
  const user = JSON.parse( localStorage.getItem('user') );

   //  !!user existe va a dar true
  return {
    logged: !!user,
    user: user,
  }
}

export const AuthProvider = ({ children }) => {
    
  // saber que usuario esta conectado para darle el permiso 
  const [ authState, dispatch ] = useReducer( authReducer, {}, init);

  // cuando viene de una base de datos 
  // const login = async( email, password ) => {
  const login = ( name = '' ) => {


    const user = { id: 'ABC', name }
    const action = { type: types.login, payload: user }

    localStorage.setItem('user', JSON.stringify( user ) );

    dispatch(action);
  }


  


  return (
    <AuthContext.Provider value={{
      
      ...authState,

      // Methods
      login,
    }}>
        { children }
    </AuthContext.Provider>
  );
}
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
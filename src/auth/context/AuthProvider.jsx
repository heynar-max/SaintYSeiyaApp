import { useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';
import PropTypes from 'prop-types';
import { types } from '../types/types';

const init = () => {
  const user = JSON.parse( localStorage.getItem('user') );

  return {
    logged: !!user,
    user: user,
  }
}

export const AuthProvider = ({ children }) => {
    
  // saber que usuario esta conectado para darle el permiso 
  const [ authState, dispatch ] = useReducer( authReducer, {}, init);

  const login = ( name = '' ) => {


    const action = { type: types.login, payload: {id: 'abc', name: name} }



    dispatch(action);
  }


  


  return (
    <AuthContext.Provider value={{
      ...authState,
      login: login
    }}>
        { children }
    </AuthContext.Provider>
  );
}
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
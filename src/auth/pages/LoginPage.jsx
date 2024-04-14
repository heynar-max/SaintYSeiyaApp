import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";


export const LoginPage = () => {

    const { login } = useContext( AuthContext )

    // hook navegación
    const navigate = useNavigate();

    const onLogin = () => {
        // cuando vaya a ingresar a la pagina y quede donde estaba la ultima vez

        // const lastPath = localStorage.getItem('lastPath') || '/';

        login( 'Saint' );
        
        // navigate(lastPath, {
        navigate('/', {
            replace: true
        });
    }
    return (
        <div className="login_container">
            <h1>login</h1>
            <hr/>
            <div className="login_content">
                <button
                    className="login_botton"
                    onClick={ onLogin }
                    >
                        login
                </button>
                <h5>Esta informacion es extraida de Saint Seiya Wiki</h5>
            </div>
            
        </div>
    )
}

import { useNavigate } from "react-router-dom"


export const LoginPage = () => {

    // hook navegación
    const navigate = useNavigate();

    const onLogin = () => {
        navigate('/', {
            // objecto replace para que reemplaze la ruta donde se encuentra
            replace: true
        });
    }
    return (
        <>
        <h1>Login</h1>
        <hr/>

        <button
        onClick={ onLogin }
        >
            Login
        </button>
        </>
    )
}

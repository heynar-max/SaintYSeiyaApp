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
            </div>
            
        </div>
    )
}

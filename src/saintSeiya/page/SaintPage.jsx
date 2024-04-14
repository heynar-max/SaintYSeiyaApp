import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getSaintById } from "../helpers";
import '../../style/SaintPage.css'


export const SaintPage = () => {

    const { id } = useParams();
    // hook navegación
    const navigate = useNavigate();

    const saint = getSaintById( id );

    const onNavigateBack = () => {
        navigate(-1);
    }

    if ( !saint ) {
        // return <>404 - not found</> si quiere la pantalla 404
        return <Navigate to="/" />
    }

    return (
        <>
            <h1 > { saint.saint} </h1>
                <hr className="h1_saint"/>
            <main className="main_container">
                <figure className="saint_figure">
                    <img className='saint_image animate__animated animate__fadeInLeft' src={ saint.image }/>
                </figure>  
                <div className="saint_rigth">
                    <h3 className="h3-saint"><b className="b_saint">Nombre : </b>{saint.saint}</h3>
                    <hr/>
                    <h3 className="h3-saint"><b className="b_saint">Caballero : </b>{saint.caballero}</h3>
                    <hr/>
                    <h3 className="h3-saint"><b className="b_saint">Signo : </b>{saint.signo}</h3>
                    <hr/>
                    <h3 className="h3-saint"><b className="b_saint">Rango : </b>{saint.rango}</h3>
                    <hr/>
                </div> 
                <figure className="saint_figure">
                    <img className='saint_image animate__animated animate__fadeInLeft' src={ saint.img }/>
                </figure> 
                <div className="saint_rigth">
                    <h3 className="h3-saint"><b className="b_saint">Armaduras : </b>{saint.armaduras}</h3>
                    <hr/>
                    <h3 className="h3-saint"><b className="b_saint">Entrenamiento : </b>{saint.entrenamiento}</h3>
                    <hr/>
                    <h3 className="h3-saint"><b className="b_saint" >Maestro : </b>{saint.maestro}</h3>
                    <hr/>
                    <h3 className="h3-saint"><b className="b_saint">Lugar de Nacimiento : </b>{saint.lugar_nacimiento}</h3>
                    <hr/>
                    <button 
                    className="boton_saint"
                    onClick={onNavigateBack}
                    >
                        Regresar
                    </button>
                </div>              
            </main>
        
        </>
    )
}

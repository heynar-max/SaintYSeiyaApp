import { useEffect, useState } from "react";
import { Saintsigno } from "../components/Saintsigno";
import { saint } from "../data/saintseiya";
import { SearchUser } from "./SearchUser";
import { Link } from "react-router-dom";



export const HomePage = (  ) => {

    // localStorage es para que cuando carge la pagina o pestaña no se pierda la informacion 
    const [saintResult, setSaintResult] = useState(null);
    const [saintData, setSaintData] = useState(() => {
        const storedData = localStorage.getItem('saintData');
        return storedData ? JSON.parse(storedData) : null;
    }); // Estado para almacenar los datos del santo encontrado

    const loadSaint = (param1, param2) => {
        // Implementa la lógica para cargar el santo según el parámetro param
        const mes = param1;
        const dia = param2;
        const signo = Saintsigno(mes, dia);
        setSaintResult(signo);
        // Ejemplo: setSaint(santoCargado);
        const santoEncontrado = saint.filter(santo => santo.signo === signo);
            setSaintData(santoEncontrado);
            // localStorage es para que cuando carge la pagina o pestaña no se pierda la informacion 
            localStorage.setItem('saintResult', signo);
            localStorage.setItem('saintData', JSON.stringify(santoEncontrado));
    };

    // localStorage es para que cuando carge la pagina o pestaña no se pierda la informacion 
    useEffect(() => {
        // This effect runs only once on component mount
        const storedResult = localStorage.getItem('saintResult');
        const storedData = localStorage.getItem('saintData');

        if (storedResult && storedData) {
            setSaintResult(storedResult);
            setSaintData(JSON.parse(storedData));
        }
    }, []);

    return (
        <>
            <h1>Saint Seiya</h1>
            <hr/>
            <h1 className="home_title">Conoce el signo de los caballeros según su fecha</h1>
            <div className="home_container"><SearchUser  loadSaint={loadSaint}/></div>
            <div>
                {saintData && saintData.length > 0 && ( // Verificar si se encontraron datos de santos
                    <div className="card_home_content">
                        <h1 className="home_signo">Signo :</h1>
                            <h1 >{ saintResult }</h1>
                            <div className="home_card_cards">
                                {saintData.map(santo => (
                                    <div  key={santo.id}>
                                        <div className="card_home">
                                            <div className="card_home_content">
                                                <p><img src={santo.image} alt={santo.saint} /></p>
                                                <p>Saint: {santo.saint}</p>
                                                <p>Caballero: {santo.caballero}</p>
                                                <Link 
                                                    className='card_link_card' 
                                                    to={`/saint/${ santo.id }`}>
                                                            Ver Más...
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                                
                    </div>
                )}
            </div>
        </> 
    )
}
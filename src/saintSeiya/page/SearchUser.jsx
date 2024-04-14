import { useState } from "react";
import PropTypes from 'prop-types';
import { Dias, Meses } from "../libs/search";
import '../../style/SearcheUser.css'


export const SearchUser = (props) => {

    const { loadSaint } = props;

    const [ mes, setMes] = useState('Meses');
    const [ dia, setDia] = useState('');
    
    // Boton Buscar
    const load = () => {

        if (mes === 'Meses' || dia === 'Dias') {
            alert('Por favor, selecciona un mes y un día antes de buscar.');
            return; // No realizar la búsqueda si faltan valores
        }
        
        const param1 = mes === 'Meses' ? '' : mes;
        const param2 = dia === 'Dias' ? '' : dia;
        
        loadSaint(param1, param2);
    };

    // Evento de select Mes
    const loadDia = async (event) => {
        setMes(event);
        setDia(Dias[await Meses.indexOf(mes)][0]);
    };

    // Creacion de options para selects
    const options = (item, i) => (
        <option key={i} value={item}>
            {item}
        </option>
    );
    

    return (
        <div className="searche_container">
            <div className="searche_content">
                <select
            className="search_user"
            value={mes}
            onChange={(e) => loadDia(e.target.value)}
            >
                {Meses.map((item, i) =>
                    options(item, i)
                )}
            </select>
            <select
            className="search_user"
            value={dia}
            onChange={(e) => setDia(e.target.value)}
            >
                {Dias[
                        Meses.indexOf(mes)
                    ].map((item, i) => options(item, i))}
            </select>

            <button
            className="boton_saint"
            onClick={ load }
            >
                cargar
            </button>
            </div>
            
        </div>
    )
}

SearchUser.propTypes = {
    loadSaint: PropTypes.func.isRequired,
};




import { useLocation, useNavigate } from 'react-router-dom';
import '../../style/SearchPage.css';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../helpers';
import { SaintCard } from '../components/SaintCard';


export const SearchPage = () => {

    //  navigate para la navegacion 
    const navigate = useNavigate();

    // tener informacion de localizacion donde nos encontramos
    const location = useLocation();

    const { q = '' } = queryString.parse( location.search );
    const saints = getHeroesByName(q);

    // === es igual
    // > escribio algo 
    const showSearch = (q.length === 0);
    const showError  = (q.length > 0) && saints.length === 0;

    const { searchText, onInputChange } = useForm({
        searchText: q
    });

    const onSearchSubmit = (event) =>{
        event.preventDefault();
        // if ( searchText.trim().length <= 1 ) return;

        // navege a la misma pagina lo que la persona busco searchText 
        navigate(`?q=${ searchText }`);
    }

    return (
        <>
            <h1>Search</h1>
            <hr/>

            <div className="search_container">
                <div className="search_left">
                    <h2>Searching</h2>
                    <hr className='search_hr'/>
                    <form className='search_form'
                    onSubmit={ onSearchSubmit }
                    >
                        <input 
                            type="text"
                            placeholder="Busca el nombre del caballero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={ searchText}
                            onChange={ onInputChange }
                        />
                        <button className="boton_saint">
                            Search
                        </button>
                    </form>
                </div>

                <div className="search_rigth">
                    <h2>Results</h2>
                    <hr className='search_hr' />
                    <div className='search_alert_blue animate__animated animate__fadeIn'
                    style={{ display: showSearch ? '' : 'none' }}
                    >
                        Search  Caballero
                    </div>
                    <div className='search_alert_danger animate__animated animate__fadeIn'
                    style={{ display: showError ? '' : 'none' }}
                    >
                        No hay Resultados <b className="b_saint"> {q} </b>
                    </div>
                    <div className='search_cards'>
                        {
                        saints.map( saint => (
                            <SaintCard key= {saint.id} {...saint}/> 
                        ))
                    }
                        </div>
                </div>
            </div>

        </>
    )
    }

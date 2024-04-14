import { useLocation, useNavigate } from 'react-router-dom';
import '../../style/SearchPage.css';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';


export const SearchPage = () => {

    //  navigate para la navegacion 
    const navigate = useNavigate();

    // tener informacion de localizacion donde nos encontramos
    const location = useLocation();

    const { q = '' } = queryString.parse( location.search );

    const { searchText, onInputChange } = useForm({
        searchText: ''
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
                            placeholder="Search a hero"
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
                    <div className='search_alert_blue'>
                        Search  Caballero
                    </div>
                    <div className='search_alert_danger'>
                        No hay Resultados <b className="b_saint"> {q} </b>
                    </div>
                    {/* <SaintCard/> */}
                </div>
            </div>

        </>
    )
    }

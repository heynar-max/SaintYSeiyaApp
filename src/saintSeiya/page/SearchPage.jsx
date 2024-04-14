import '../../style/SearchPage.css';


export const SearchPage = () => {
    return (
        <>
            <h1>Search</h1>
            <hr/>

            <div className="search_container">
                <div className="search_left">
                    <h2>Searching</h2>
                    <hr className='search_hr'/>
                    <form className='search_form'>
                        <input 
                            type="text"
                            placeholder="Search a hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"

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
                        No hay Resultados <b className="b_saint"> ABC</b>
                    </div>
                    {/* <SaintCard/> */}
                </div>
            </div>

        </>
    )
    }

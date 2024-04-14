import {  Link, NavLink, useNavigate} from "react-router-dom"
import '../../style/Navbar.css'
import logo from '../../assets/saint.png'
import { AuthContext } from "../../auth/context/AuthContext";
import { useContext } from "react";
import { GoHome, GoPlusCircle, GoSearch, GoSignOut } from "react-icons/go";


export const Navbar = () => {

    const { user, logout } = useContext(AuthContext);

    // hook navegación
    const navigate = useNavigate();

    // select 
    const navigationOptions = [
        { path: '/gold', label: 'Gold', icon: <GoSearch /> },
        { path: '/bronze', label: 'Bronze', icon: <GoPlusCircle /> },
        { path: '/', label: 'Home', icon: <GoHome /> },
        // Puedes agregar más opciones aquí según sea necesario
    ];
    const handleRouteChange = (path) => {
        navigate(path); // Navegar a la ruta seleccionada
    };
    // hasta aqui va el select

    const onLogout = () => {
        logout();
        navigate('/login', {
            // objecto replace para que reemplaze la ruta donde se encuentra
            replace: true
        });
    }

    return (
        <>
            <nav className="nav_header">
                    <Link to="/">
                        <img className="navbar_logo" src={logo}/>
                    </Link>
                    <div className="navbar-navigation">

                        <NavLink 
                            className={ ({isActive}) => `nav-item   ${ isActive ? 'active':'' }` } 
                            to="/bronze"
                        >
                            Bronze
                        </NavLink>

                        <NavLink 
                            className={ ({isActive}) => `nav-item   ${ isActive ? 'active':'' }` }
                            to="/gold"
                        >
                            Gold
                        </NavLink>

                        <NavLink 
                            className={ ({isActive}) => `nav-item   ${ isActive ? 'active':'' }` }
                            to="/search"
                        >
                            Search
                        </NavLink>

                        <span
                            className='span_login'
                        >
                            {/* ? si en null no continue  */}
                            { user?.name}
                        </span>
                        
                        <button
                            className="onlogout_botton"
                            onClick={ onLogout }
                        >
                            Logout
                        </button>
                    </div>
            </nav>

            {/* FOOTER  */}
            <main className="footer_main">
                <nav className='nav__footer'>

                <div className='nav__footer_item'>
                    <NavLink className={ ({isActive}) => `nav__footer_text   ${ isActive ? 'active':'' }` }  
                        to="/">
                            <GoHome/>
                        <span className='footer_text'>
                            Home
                        </span>
                    </NavLink>
                    
                    {/* select  */}
                    <div className="nav__footer_text">
                        <select className='navbar-select' 
                        onChange={(e) => handleRouteChange(e.target.value)}>
                        {navigationOptions.map((option, index) => (
                            <option key={index} value={option.path}>
                            {option.label}
                            </option>
                        ))}
                        </select>
                        
                    </div>

                    <NavLink className={ ({isActive}) => `nav__footer_text   ${ isActive ? 'active':'' }` } 
                        to="/search">
                            <GoSearch />
                        <span className='footer_text'>
                            Buscar
                        </span>
                    </NavLink>


                    <NavLink 
                        className={ ({isActive}) => `nav__footer_texto   ${ isActive ? 'active':'' }` }
                        onClick={ onLogout }>
                            <GoSignOut />
                            <span className='footer_text' >
                                Salir
                            </span>
                    </NavLink>
                    </div>
                    
                </nav>
            </main>
        </>
        
    )
}

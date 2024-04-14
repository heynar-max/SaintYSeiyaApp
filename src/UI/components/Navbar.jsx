import {  Link, NavLink, useNavigate} from "react-router-dom"
import '../../style/Navbar.css'
import logo from '../../assets/saint.png'
import { AuthContext } from "../../auth/context/AuthContext";
import { useContext } from "react";


export const Navbar = () => {

    const { user } = useContext(AuthContext);

    // hook navegación
    const navigate = useNavigate();

    const onLogout = () => {
        navigate('/login', {
            // objecto replace para que reemplaze la ruta donde se encuentra
            replace: true
        });
    }

    return (
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
    )
}

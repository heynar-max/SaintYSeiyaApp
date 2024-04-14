import {  Link, NavLink, useNavigate} from "react-router-dom"
import '../../style/Navbar.css'
import logo from '../../assets/saint.png'


export const Navbar = () => {

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

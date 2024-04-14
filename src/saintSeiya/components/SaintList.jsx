import { getSaintByRango } from "../helpers"
import PropTypes from 'prop-types';


export const SaintList = ({ rango }) => {

    const saints = getSaintByRango( rango )
    return (
        <ul>
            {
                saints.map( saint => (
                    <li key={saint.id}>
                        {saint.caballero}
                    </li>
                ))
            }
        </ul>
    )
}

SaintList.propTypes = {
    rango: PropTypes.string.isRequired, // Assuming rango is a string, adjust if it's a different type
};

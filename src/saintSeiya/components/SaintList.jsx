import { getSaintByRango } from "../helpers"
import PropTypes from 'prop-types';
import { SaintCard } from "./";


export const SaintList = ({ rango }) => {

    const saints = getSaintByRango( rango )
    return (
        <div className="cards__card">
            {
                saints.map( saint => (
                    <SaintCard
                        key={saint.id}
                        {...saint}
                    />
                ))
            }
        </div>
    )
}

SaintList.propTypes = {
    rango: PropTypes.string.isRequired, // Assuming rango is a string, adjust if it's a different type
};

import { getSaintByRango } from "../helpers"
import PropTypes from 'prop-types';
import { SaintCard } from "./";
import { useMemo } from "react";


export const SaintList = ({ rango }) => {

    // memorizar los valores 
    // useMemo para memorizar valores
    // useCallback para momerizar funciones
    // callBack () => getSaintById( id )
    // [ rango] son las dependecias
    const saints = useMemo ( () => getSaintByRango( rango ), [ rango])


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

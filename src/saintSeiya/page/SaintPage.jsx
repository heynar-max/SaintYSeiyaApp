import { Navigate, useParams } from "react-router-dom";
import { getSaintById } from "../helpers";


export const SaintPage = () => {

    const { id } = useParams();

    const saint = getSaintById( id );

    if ( !saint ) {
        // return <>404 - not found</> si quiere la pantalla 404
        return <Navigate to="/" />
    }

    return (
        <h1>saint page</h1>
    )
}

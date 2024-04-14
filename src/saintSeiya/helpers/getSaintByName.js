import { saint } from "../data/saintseiya";



export const getHeroesByName = ( name = '' ) => {

    // toLocaleLowerCase para minusculas y trim para no haber espacios 
    name = name.toLocaleLowerCase().trim();
    
    if ( name.length === 0 ) return [];

    return saint.filter(
        saint => saint.saint.toLocaleLowerCase().includes( name ) 
    );

}
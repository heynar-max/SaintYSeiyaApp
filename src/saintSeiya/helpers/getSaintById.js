import { saint } from "../data/saintseiya"


export const getSaintById = ( id ) => {
    // si encuenta el id muestrelo, si no lo enceuntra da undefined
    return saint.find(saint => saint.id === id)
}

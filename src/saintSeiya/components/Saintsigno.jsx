


export const Saintsigno = (mes, dia) => {
    
    if ((mes === 'MARZO' && dia >= 21) || (mes === 'ABRIL' && dia <= 19)) {
        return 'Aries';
    } else if ((mes === 'ABRIL' && dia >= 20) || (mes === 'MAYO' && dia <= 20)) {
        return 'Tauro';
    } else if ((mes === 'MAYO' && dia >= 21) || (mes === 'JUNIO' && dia <= 20)) {
        return 'Geminis';
    } else if ((mes === 'JUNIO' && dia >= 21) || (mes === 'JULIO' && dia <= 22)) {
        return 'Cancer';
    } else if ((mes === 'JULIO' && dia >= 23) || (mes === 'AGOSTO' && dia <= 22)) {
        return 'Leo';
    } else if ((mes === 'AGOSTO' && dia >= 23) || (mes === 'SEPTIEMBRE' && dia <= 22)) {
        return 'Virgo';
    } else if ((mes === 'SEPTIEMBRE' && dia >= 23) || (mes === 'OCTUBRE' && dia <= 22)) {
        return 'Libra';
    } else if ((mes === 'OCTUBRE' && dia >= 23) || (mes === 'NOVIEMBRE' && dia <= 21)) {
        return 'Escorpion';
    } else if ((mes === 'NOVIEMBRE' && dia >= 22) || (mes === 'DICIEMBRE' && dia <= 21)) {
        return 'Sagitario';
    } else if ((mes === 'DICIEMBRE' && dia >= 22) || (mes === 'ENERO' && dia <= 19)) {
        return 'Capricornio';
    } else if ((mes === 'ENERO' && dia >= 20) || (mes === 'FEBRERO' && dia <= 18)) {
        return 'Acuario';
    } else if ((mes === 'FEBRERO' && dia >= 19) || (mes === 'MARZO' && dia <= 20)) {
        return 'Piscis';
    } else {
        return 'No se ha encontrado un signo para esta fecha.';
    }
}


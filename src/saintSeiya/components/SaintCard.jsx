import PropTypes from 'prop-types';
import '../../style/SaintCard.css';
import { Link } from 'react-router-dom';

export const SaintCard = ( {
        id,
        saint, 
        caballero,
        image,
        rango, 
        altura,
        peso,
}) => {

  const saintClass = `${rango}`
    return (
        <>
          <div >
            <main className="card animate__animated animate__fadeIn" >
              <div className="card_content">
                <h3 className="card_title">{saint}</h3>
                  <figure className="card_figure">
                    <img src={image} alt={saint}/>
                  </figure>
            
                <h3 className="card_title">{caballero}</h3>
                  <div className={`hp-line ${saintClass}`}></div>

                <h4>{rango}</h4>
                  <div className="card_description">
                    <div className="type">
                      <div className="card_display">{rango}</div>
                      <div className="text">RANGO</div>
                    </div>
                    <div className="weight">
                      <div className="card_display">{peso}</div>
                      <div className="text">WEIGHT</div>
                    </div>
                    <div className="height">
                      <div className="card_display">{altura}</div>
                      <div className="text">HEIGHT</div>
                    </div>
                  </div>
                  
                    <Link 
                      className='card_link_card' 
                      to={`/saint/${ id }`}>
                            Ver Más...
                    </Link>
              </div>
            </main>
          </div>
        </>
    )
}

SaintCard.propTypes = {
    id: PropTypes.string.isRequired,
    saint: PropTypes.string.isRequired,
    caballero: PropTypes.string.isRequired,
    image:PropTypes.string.isRequired,
    rango: PropTypes.string.isRequired,
    altura: PropTypes.string.isRequired,
    peso: PropTypes.string.isRequired,
};

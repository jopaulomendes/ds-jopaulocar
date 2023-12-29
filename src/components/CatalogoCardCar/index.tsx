import './styles.css';
import CarImg from 'assets/images/car-catalogo.svg';

function CatalagoCarCard() {

    return (
        <div className='base-card mb-3 catalogo-container'>
            <img src={CarImg} alt='Car catalogo' />
            <h4>Audi Supra TT</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</p>
            <button className='btn btn-primary'>COMPRAR</button>
        </div>
    );
}

export default CatalagoCarCard;
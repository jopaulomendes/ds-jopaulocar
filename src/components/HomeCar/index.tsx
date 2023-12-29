import './styles.css';
import CarHome from '../../assets/images/car-home.svg';

function HomeCar() {

  return (
    <div className="main-home-card">
      <div className='row flex-row-reverse'>
        <div className='col-xl-6 pt-5'>
          <img src={CarHome} alt="CarHome" className='img-container' />
        </div>
        <div className='col-xl-6 text-white'>
          <h4>O carro perfeito para você</h4>
          <p>
            Conheça nossos carros e de mais um passo na realização do seu sonho
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeCar;
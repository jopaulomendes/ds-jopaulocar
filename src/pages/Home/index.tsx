import { useHistory } from 'react-router-dom';
import './styles.css';
import HomeCar from 'components/HomeCar';

function Home() {
    const history = useHistory();

    const handleClick = () => {
        history.push('/catalogo');
    };

    return (

        <div className="container">
            <HomeCar />
            <div className="btn-card d-md-flex">
                <button className="btn btn-primary" onClick={handleClick}>
                    VER CATÁLOGO
                </button>
                <p>Comece agora a navegar</p>
            </div>
        </div>

    );
}

export default Home;
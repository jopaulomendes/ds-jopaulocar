import CatalagoCarCard from "components/CatalogoCardCar";

function Catalogo() {

    return (
        <div className='container'>
            <div className='d-flex mt-3 base-card input-container'>
                <input type='text' placeholder='Digite sua busca' className='form-control'/>
                <button className='btn btn-primary w-auto'>BUSCAR</button>
            </div>
            <div className='row'>
                <div className='col-sm-6 col-md-6 col-lg-4 col-xl-4'><CatalagoCarCard /></div>
                <div className='col-sm-6 col-md-6 col-lg-4 col-xl-4'><CatalagoCarCard /></div>
                <div className='col-sm-6 col-md-6 col-lg-4 col-xl-4'><CatalagoCarCard /></div>
                <div className='col-sm-6 col-md-6 col-lg-4 col-xl-4'><CatalagoCarCard /></div>
                <div className='col-sm-6 col-md-6 col-lg-4 col-xl-4'><CatalagoCarCard /></div>
                <div className='col-sm-6 col-md-6 col-lg-4 col-xl-4'><CatalagoCarCard /></div>
                <div className='col-sm-6 col-md-6 col-lg-4 col-xl-4'><CatalagoCarCard /></div>
                <div className='col-sm-6 col-md-6 col-lg-4 col-xl-4'><CatalagoCarCard /></div>
            </div>
        </div>
    );
}

export default Catalogo;
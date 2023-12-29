import Navbar from 'components/Navbar';
import Catalogo from 'pages/Catalogo';
import Home from 'pages/Home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function Rotas() {

    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/catalogo">
                    <Catalogo />
                </Route>
            </Switch>
        </Router>
    );
}

export default Rotas;
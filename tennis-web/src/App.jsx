import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../src/assets/css/app.css';

/* Conteiners */
import About from './container/About';
import Jugador from './container/Jugador';
import Partido from './container/Partido';
import Home from './container/Home'
import NotFound from './container/NotFound';

/* Components */
import Menu from './components/Menu';

const App = () => {
    return(
        <>
            <BrowserRouter>
            <Menu>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/jugador" component={Jugador} />
                    <Route exact path="/partido" component={Partido} />
                    <Route exact path="/about" component={About} />
                    <Route component={NotFound}/>
                </Switch>
            </Menu>
        </BrowserRouter>
        </>
    )
}

export default App;
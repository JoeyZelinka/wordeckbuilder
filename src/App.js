import React from 'react';
import ReactDOM from 'react-dom';
import {
  NavBar
} from './components';
import './styles.css';
import './theme.scss';
import 'react-redux';
import 'redux';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import MTGDeckBuilder from './components/MTGDeckBuilder';
import FABDeckBuilder from './components/FABDeckbuilder';
import PokemonDeckBuilder from './components/PokemonDeckBuilder';



const App = () => {

  return (

<Router>
    <div id="app">
      <NavBar/>
      <Switch>

        <Route exact path="/FABDeckBuilder">
          <FABDeckBuilder />        
        </Route>

        <Route path ="/MTGDeckBuilder">
          <MTGDeckBuilder/>
        </Route>

        <Route path ="/PokemonDeckBuilder">
          <PokemonDeckBuilder/>
        </Route>

      </Switch>

      
    </div>
    </Router>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;

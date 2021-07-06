import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import About from './About';
import './App.css';
import pokemons from './data';
import NotFound from './NotFound';
import Pokedex from './Pokedex';
import PokemonDetails from './PokemonDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1> Pokedex </h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <Switch>
          <Route 
            path="/pokemon/:id"
            render={ (props) => <PokemonDetails {...props} pokemons={pokemons} />}
          />
          <Route path="/about" component={About} />
          <Route exact path="/" render={ (props) => <Pokedex {...props} pokemons={pokemons} /> } />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
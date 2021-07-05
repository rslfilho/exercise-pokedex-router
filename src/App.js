import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import PokemonDetails from './PokemonDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" render={ (props) => <Pokedex {...props} pokemons={pokemons} /> } />
        <Route 
          path="/pokemon/:id"
          render={ (props) => <PokemonDetails {...props} pokemons={pokemons} />}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
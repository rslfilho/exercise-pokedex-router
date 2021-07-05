import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <h1> Pokedex </h1>
      <Route path="/" render={ (props) => <Pokedex {...props} pokemons={pokemons} /> } />
      </BrowserRouter>
    </div>
  );
}

export default App;
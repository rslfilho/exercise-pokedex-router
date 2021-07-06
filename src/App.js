import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import About from './About';
import './App.css';
import pokemons from './data';
import NotFound from './NotFound';
import Pokedex from './Pokedex';
import PokemonDetails from './PokemonDetails';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.favoritePokemon = this.favoritePokemon.bind(this);

    this.state = {
      favorites: [],
    }
  }

  favoritePokemon(id) {
    const { favorites } = this.state;

    if (favorites.includes(id)) {
      this.setState({
        favorites: favorites.filter((item) => item !== id),
      });
    } else {
      this.setState((prevState) => ({ favorites: [...prevState.favorites, id]}));
    }
  }

  render() {
    const { favorites } = this.state;

    return (
      <div className="App">
        <BrowserRouter>
          <h1> Pokedex </h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/favorites">Favorite Pokemons</Link>
          </nav>
          <Switch>
            <Route 
              path="/pokemon/:id"
              render={
                (props) => <PokemonDetails 
                  {...props} 
                  pokemons={pokemons} 
                  setFavPokemon={this.favoritePokemon} 
                  favoritesPokemons={favorites}
                />
              }
            />
            <Route path="/about" component={About} />
            <Route exact path="/" render={ (props) => <Pokedex {...props} pokemons={pokemons} /> } />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

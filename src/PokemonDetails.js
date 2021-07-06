import React, { Component } from "react";
import Pokemon from "./Pokemon";

class PokemonDetails extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      favorite: false,
    }
  }

  handleChange({ target }) {
    const { setFavPokemon } = this.props;
    const { match: { params: { id } } } = this.props;

    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => setFavPokemon(id) );
  }

  componentDidMount() {
    const { favoritesPokemons, match: { params: { id } } } = this.props;

    if (favoritesPokemons.includes(id)) {
      this.setState({
        favorite: true,
      })
    }
  }

  render() {
    const { pokemons, match: { params: { id } } } = this.props;
    const pokemon = pokemons.find((pokemon) => pokemon.id === Number(id));
    const { favorite } = this.state;

    return (
      <>
        <h1>Pokemon Details</h1>
        <Pokemon pokemon={pokemon} detailLink={false} />
        <div>
          <label htmlFor="favorite">Pokemon Favorito?</label>
          <input 
            type="checkbox"
            id="favorite"
            name="favorite"
            value="favorite"
            checked={favorite}
            onChange={this.handleChange}
          />
        </div>
        <h4>Summary</h4>
        <p>{ pokemon.summary }</p>
        <div>
          <h4>Locations</h4>
          <div>
          {
            pokemon.foundAt.map((loc) => {
              return (
                <div key={loc.location}>
                  <h5>{loc.location}</h5>
                  <img src={loc.map} alt="Mapa" />
                </div>
              )
            })
          }
          </div>
        </div>
      </>
    );
  }
}

export default PokemonDetails;

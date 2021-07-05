import React, { Component } from "react";
import Pokemon from "./Pokemon";

class PokemonDetails extends Component {
  render() {
    const { pokemons, match: { params: { id } } } = this.props;
    const pokemon = pokemons.find((pokemon) => pokemon.id === Number(id));
    return (
      <>
        <h1>Pokemon Details</h1>
        <Pokemon pokemon={pokemon} />
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

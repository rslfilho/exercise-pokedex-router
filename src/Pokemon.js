import React from 'react';
import { Link } from 'react-router-dom';
import './pokemon.css';

class Pokemon extends React.Component {
  render() {
    const { detailLink, pokemon } = this.props;
    const {name, type, averageWeight, image, id} = pokemon;

    return (
      <div className="pokemon">
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>
            Average weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
        </div>
        <img src={image} alt={`${name} sprite`} />
        {
          detailLink && <Link to={`/pokemon/${id}`}>Detalhes deste Pokemon</Link>
        }
      </div>
    );
  }
}

export default Pokemon;
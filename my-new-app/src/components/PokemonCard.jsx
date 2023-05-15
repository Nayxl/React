import PropTypes from "prop-types";
import { useState } from "react";

function PokemonCard(pokemon) {
  return (
    <figure>
      <h1>PokemonCard</h1>
      {pokemon.img === undefined ? (
        <p>???</p>
      ) : (
        <img src={pokemon.img} alt={pokemon.name}></img>
      )}
      <figcaption> {pokemon.name} </figcaption>
    </figure>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string,
  }).isRequired,
};

export default PokemonCard;

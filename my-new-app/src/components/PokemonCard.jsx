import PropTypes from "prop-types"; 
import { useState } from 'react';

function PokemonCard(pokemon) {
    return (
        <figure> 
            <h1>PokemonCard</h1>
            {pokemon.imgSrc === undefined ? <p>???</p> : 
            <img src={pokemon.imgSrc} alt={pokemon.name}></img> }
            <figcaption> {pokemon.name} </figcaption>
        </figure>
    )
}


PokemonCard.propTypes = {
pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
}).isRequired,
}


export default PokemonCard; 


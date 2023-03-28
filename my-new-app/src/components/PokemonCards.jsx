function PokemonCards() {
    const pokemon = pokemonList[0];
    return (
        <figure> 
            <h1>PokemonCards</h1>
            {pokemon.imgSrc === undefined ? <p>???</p> : 
            <img src={pokemon.imgSrc} alt={pokemon.name}></img> }
            <figcaption> {pokemon.name} </figcaption>
        </figure>
    )
}

const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];

export default PokemonCards;

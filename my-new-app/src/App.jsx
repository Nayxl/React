import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./MyTitle";
import PokemonCard from "./components/PokemonCard";
import NavBar from "./NavBar";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [index, setIndex] = useState(0);
  let pokemon = pokemonList[index];
  const previousPokemon = () => {
    if (index > 0) {
      setIndex(index - 1);
      alert(index);
    }
  };
  const nextPokemon = () => {
    if (index < pokemonList.length - 1) {
      setIndex(index + 1);
    }
  };

  return (
    <div className="App">
      <NavBar previousPokemon={previousPokemon} nextPokemon={nextPokemon} />
      <PokemonCard name={pokemon.name} imgSrc={pokemon.img} />
    </div>
  );
}

export default App;

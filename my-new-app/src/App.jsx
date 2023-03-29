import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './MyTitle'
import PokemonCards from './components/PokemonCards'



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
  const [index, setIndex] = useState(0)
  let pokemon = pokemonList[index];
  const previousPokemon = () => {
    if (index > 0){
      setIndex(index-1);
    }
  };
  const nextPokemon = () => {
    if (index < pokemonList.length - 1){
      setIndex(index+1);
    }
  }

  return (
    <div className="App">
      
       <PokemonCards name={pokemon.name} imgSrc={pokemon.imgSrc}/>
    <button onClick={previousPokemon}>Précédent</button>
    <button onClick={nextPokemon}>Suivant</button>
    </div>
  )
}


export default App


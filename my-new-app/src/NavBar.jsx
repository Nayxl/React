
function NavBar (pokemon) {
    
    return (
        <nav>
            <button onClick={pokemon.previousPokemon}>Précédent</button>
            <button onClick={pokemon.nextPokemon}>Suivant</button>
        </nav>
    )
}

export default NavBar 
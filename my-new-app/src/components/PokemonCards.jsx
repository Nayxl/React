function PokemonCards(props) {
    return (
        <figure> 
            <h1>PokemonCards</h1>
            {props.imgSrc === undefined ? <p>???</p> : 
            <img src={props.imgSrc} alt={props.name}></img> }
            <figcaption> {props.name} </figcaption>
        </figure>
    )
}



export default PokemonCards;

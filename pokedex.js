
const Pokedex = ({ pokemon = defaultPokemon }) => {

    return (
        <div className="Pokedex">
        {pokemon.map(p => (
            <Pokecard key={p.id} name={p.name} image={p.image} type={p.type} />
        ))}
        </div>
    )
};

const defaultPokemon = [
    {
        id:4,
        name: 'Charmander', 
        type: 'fire',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
    },
    {
        id:7,
        name: 'Squirtle', 
        type: 'water',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
    },
    {
        id:11,
        name: 'Metapod', 
        type: 'bug',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png',
    },
    {
        id:12,
        name: 'Butterfree', 
        type: 'flying',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png',
    },
    {
        id:25,
        name: 'Pikachu', 
        type: 'electric',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    },
    {
        id:39,
        name: 'Jigglypuff', 
        type: 'normal',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png',
    },
    {
        id:94,
        name: 'Gengar', 
        type: 'poison',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png',
    },
    {
        id:133,
        name: 'Eevee', 
        type: 'normal',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png',
    },
]
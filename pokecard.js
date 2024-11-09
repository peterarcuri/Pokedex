
const Pokecard = ({name, image, type}) => {

    return (
        <div className="Pokecard">
            <h2 className="Pokecard-title">{name}</h2>
            <img className="Pokecard-image" src={image} alt={name} />
            <p className="Pokecard-type">Type: {type}</p>
        </div>
    )
}


const Card = props => {
    const { name, imageUrl, rarity } = props;

    return (
        <div>
            <img src={imageUrl} alt={name} />
            <h3>{name}</h3>
            <p>{rarity}</p>
        </div>
    )
}
export default Card



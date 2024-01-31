export const CharacterCard = ({ name, img, status, species, gender }) => {
    return (
        <div className="character-card">
            <h2>{name}</h2>
            <img src={img} alt={name} />

            <ul>
                <li>Status:{status}</li>
                <li>Specie:{species}</li>
                <li>Gender:{gender}</li>
            </ul>







        </div>

    )

}
import './styles.css'

const VenueBlock = ({venue}) => {

    return (
        <button className="venue-block" style={{backgroundImage: `url(${venue.img})`}}>
            <div className="details">
                <h2>{venue.name}</h2>
                <p>Capacity: {venue.capacity}</p>
                <p>Price: ${venue.price}</p>
            </div>
        </button>
    )
}

export default VenueBlock
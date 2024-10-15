import './styles.css'

const VenueBlock = ({venue}) => {

    return (
        <div className="venue-block" style={{backgroundImage: `url(${venue.img})`}}>
            <div className="details">
                <h2>{venue.name}</h2>
                <p>Capacity: {venue.capacity}</p>
                <p>Price: ${venue.price}</p>
            </div>
        </div>
    )
}

export default VenueBlock
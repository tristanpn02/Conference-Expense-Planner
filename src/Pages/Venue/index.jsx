import conferenceImage from '../../assets/images/venues/conference.jpg';
import auditoriumImage from '../../assets/images/venues/auditorium.jpg';
import presentationImage from '../../assets/images/venues/presentation.jpg';
import largeMeetingImage from '../../assets/images/venues/large-meeting.jpg';
import smallMeetingImage from '../../assets/images/venues/small-meeting.jpg';

const VenuePage = () => {
    const venues = [
        { id: 1, name: 'Conference Room', capacity: 15, price: 1500, img: conferenceImage},
        { id: 2, name: 'Auditorium Hall', capacity: 200, price: 5500, img: auditoriumImage},
        { id: 3, name: 'Presentation Room', capacity: 50, price: 3500, img: presentationImage},
        { id: 4, name: 'Large Meeting Room', capacity: 10, price: 1000, img: largeMeetingImage},
        { id: 5, name: 'Small Meeting Room', capacity: 5, price: 800, img: smallMeetingImage},
    ];

    return (
        <div className="venue-page">
            <h1>Venue Room Selection</h1>
            <div className="venue-list">
                {venues.map(venue => (
                    <div className="venue-block">
                        <img src={venue.img} alt="" />
                        <h2>{venue.name}</h2>
                        <p>{venue.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default VenuePage;
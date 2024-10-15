import conferenceImage from '../../assets/images/venues/conference.jpg';
import auditoriumImage from '../../assets/images/venues/auditorium.jpg';
import presentationImage from '../../assets/images/venues/presentation.jpg';
import largeMeetingImage from '../../assets/images/venues/large-meeting.jpg';
import smallMeetingImage from '../../assets/images/venues/small-meeting.jpg';
import ItemBlock from '../../Components/ItemBlock';

import './styles.css';
import { useSelector } from 'react-redux';

const PlannerPage = () => {
    const cartItems = useSelector(state => state.cart);
    
    const venuesTotalAmount = cartItems.venues.reduce((total, item) => total + item.price * item.quantity, 0);

    const venues = [
        { id: 1, name: 'Conference Room', capacity: 15, price: 1500, img: conferenceImage},
        { id: 2, name: 'Auditorium Hall', capacity: 200, price: 5500, img: auditoriumImage},
        { id: 3, name: 'Presentation Room', capacity: 50, price: 3500, img: presentationImage},
        { id: 4, name: 'Large Meeting Room', capacity: 10, price: 1000, img: largeMeetingImage},
        { id: 5, name: 'Small Meeting Room', capacity: 5, price: 800, img: smallMeetingImage},
    ];

    return (
        <div className="planner-page">
            <h1>Venue Room Selection</h1>
            <div className="planner-list">
                {venues.map(venue => (
                    <ItemBlock key={venue.id} item={venue} category="venues" />
                ))}
            </div>
            <p>Total: ${venuesTotalAmount}</p>
        </div>
    )
}

export default PlannerPage;
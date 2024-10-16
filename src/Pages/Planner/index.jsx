import conferenceImage from '../../assets/images/venues/conference.jpg';
import auditoriumImage from '../../assets/images/venues/auditorium.jpg';
import presentationImage from '../../assets/images/venues/presentation.jpg';
import largeMeetingImage from '../../assets/images/venues/large-meeting.jpg';
import smallMeetingImage from '../../assets/images/venues/small-meeting.jpg';

import projectorImage from '../../assets/images/addons/projector.jpg';
import speakerImage from '../../assets/images/addons/speaker.png';
import microphoneImage from '../../assets/images/addons/microphone.jpg';
import whiteboardImage from '../../assets/images/addons/whiteboard.jpg';
import signageImage from '../../assets/images/addons/signage.jpg';

import breakfastImage from '../../assets/images/meals/breakfast.jpg';
import highteaImage from '../../assets/images/meals/hightea.jpg';
import lunchImage from '../../assets/images/meals/lunch.jpg';
import dinnerImage from '../../assets/images/meals/dinner.jpg';

import ItemBlock from '../../Components/ItemBlock';

import './styles.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { addItem, removeItem } from '../../Components/ShoppingCart/CartSlice';

const PlannerPage = () => {
    const cartItems = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const venuesTotalAmount = cartItems.venues.reduce((total, item) => total + item.price * item.quantity, 0);
    const addonsTotalAmount = cartItems.addons.reduce((total, item) => total + item.price * item.quantity, 0);

    const [mealsPeopleAmount, setMealsPeopleAmount] = useState(0);

    const venues = [
        { id: 1, name: 'Conference Room', capacity: 15, price: 1500, img: conferenceImage },
        { id: 2, name: 'Auditorium Hall', capacity: 200, price: 5500, img: auditoriumImage },
        { id: 3, name: 'Presentation Room', capacity: 50, price: 3500, img: presentationImage },
        { id: 4, name: 'Large Meeting Room', capacity: 10, price: 1000, img: largeMeetingImage },
        { id: 5, name: 'Small Meeting Room', capacity: 5, price: 800, img: smallMeetingImage },
    ];

    const addons = [
        { id: 1, name: 'Projectors', price: 200, img: projectorImage },
        { id: 2, name: 'Speaker', price: 35, img: speakerImage },
        { id: 3, name: 'Microphone', price: 45, img: microphoneImage },
        { id: 4, name: 'Whiteboard', price: 80, img: whiteboardImage },
        { id: 5, name: 'Signage', price: 80, img: signageImage },
    ];

    const meals = [
        { id: 1, name: 'Breakfast', price: 50, img: breakfastImage },
        { id: 2, name: 'High Tea', price: 25, img: highteaImage },
        { id: 3, name: 'Lunch', price: 65, img: lunchImage },
        { id: 4, name: 'Dinner', price: 70, img: dinnerImage },
    ];

    const mealsTotalAmount = cartItems.meals.reduce((total, meal) => {
        return total + meal.price * mealsPeopleAmount;
    }, 0);

    const handleMealSelection = (mealId) => {
        const isMealSelected = cartItems.meals.find(meal => meal.id === mealId);
        if (isMealSelected) {
            dispatch(removeItem({ category: 'meals', id: mealId }));
        } else {
            const mealToAdd = meals.find(meal => meal.id === mealId);
            if (mealToAdd) {
                dispatch(addItem({ category: 'meals', item: mealToAdd }));
            }
        }
    };

    return (
        <div className="planner-page">
            <div className="venues">
                <h1>Venue Room Selection</h1>
                <div className="planner-list">
                    {venues.map(venue => (
                        <ItemBlock key={venue.id} item={venue} category="venues" />
                    ))}
                </div>
                <h2 className='total'>Total: ${venuesTotalAmount}</h2>
            </div>

            <div className="addons">
                <h1>Add-ons Selection</h1>
                <div className="planner-list">
                    {addons.map(addon => (
                        <ItemBlock key={addon.id} item={addon} category="addons" />
                    ))}
                </div>
                <h2 className='total'>Total: ${addonsTotalAmount}</h2>
            </div>

            <div className="meals">
                <h1>Meals Selection</h1>
                <p>Number of people:
                    <input
                        type="number"
                        value={mealsPeopleAmount}
                        onChange={(e) => setMealsPeopleAmount(Number(e.target.value))}
                        min="0"
                    />
                </p>
                <div className="planner-list">
                    {meals.map(meal => (
                        <ItemBlock
                            key={meal.id}
                            item={meal}
                            category="meals"
                            onMealSelect={handleMealSelection}
                        />
                    ))}
                </div>
                <h2 className='total'>Total: ${mealsTotalAmount}</h2>
            </div>
        </div>
    );
}

export default PlannerPage;

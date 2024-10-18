import { getCategorizedImages } from '../../utils/imageLoader';


import ItemBlock from '../../components/ItemBlock';

import styles from './styles.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { addItem, removeItem, setPeopleQuantity } from '../../components/ShoppingCart/CartSlice';

const PlannerPage = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const venuesTotalAmount = cart.venues.reduce((total, item) => total + item.price * item.quantity, 0);
    const addonsTotalAmount = cart.addons.reduce((total, item) => total + item.price * item.quantity, 0);
    const mealsTotalAmount = cart.meals.reduce((total, meal) => total + meal.price * cart.people, 0);
    
    const categorizedImages = getCategorizedImages();

    const venues = [
        { id: 1, name: 'Conference Room', capacity: 15, price: 1500, img: categorizedImages.venues['conference.jpg'] },
        { id: 2, name: 'Auditorium Hall', capacity: 200, price: 5500, img: categorizedImages.venues['auditorium.jpg'] },
        { id: 3, name: 'Presentation Room', capacity: 50, price: 3500, img: categorizedImages.venues['presentation.jpg'] },
        { id: 4, name: 'Large Meeting Room', capacity: 10, price: 1000, img: categorizedImages.venues['largeMeeting.jpg'] },
        { id: 5, name: 'Small Meeting Room', capacity: 5, price: 800, img: categorizedImages.venues['smallMeeting.jpg'] },
    ];

    const addons = [
        { id: 1, name: 'Projectors', price: 200, img: categorizedImages.addons['projector.jpg'] },
        { id: 2, name: 'Speaker', price: 35, img: categorizedImages.addons['speaker.jpg'] },
        { id: 3, name: 'Microphone', price: 45, img: categorizedImages.addons['microphone.jpg'] },
        { id: 4, name: 'Whiteboard', price: 80, img: categorizedImages.addons['whiteboard.jpg'] },
        { id: 5, name: 'Signage', price: 80, img: categorizedImages.addons['signage.jpg'] },
    ];

    const meals = [
        { id: 1, name: 'Breakfast', price: 50, img: categorizedImages.meals['breakfast.jpg'] },
        { id: 2, name: 'High Tea', price: 25, img: categorizedImages.meals['highTea.jpg'] },
        { id: 3, name: 'Lunch', price: 65, img: categorizedImages.meals['lunch.jpg'] },
        { id: 4, name: 'Dinner', price: 70, img: categorizedImages.meals['dinner.jpg'] },
    ];

    const handleMealToggle = (mealId) => {
        const isMealSelected = cart.meals.find(meal => meal.id === mealId);
        if (isMealSelected) {
            dispatch(removeItem({ category: 'meals', id: mealId }));
        } else {
            const mealToAdd = meals.find(meal => meal.id === mealId);
            if (mealToAdd) {
                dispatch(addItem({ category: 'meals', item: mealToAdd }));
            }
        }
    };

    const handlePeopleChange = (e) => {
        const peopleCount = parseInt(e.target.value, 10) || 0;
        dispatch(setPeopleQuantity(peopleCount));
    }

    return (
        <div className={styles.page}>
            <div className={styles.selection}>
                <h1>Venue Room Selection</h1>
                <div className={styles.list}>
                    {venues.map(venue => (
                        <ItemBlock key={venue.id} item={venue} category="venues" />
                    ))}
                </div>
                <h2 className={styles.total}>Total: ${venuesTotalAmount}</h2>
            </div>

            <div className={styles.selection}>
                <h1>Add-ons Selection</h1>
                <div className={styles.list}>
                    {addons.map(addon => (
                        <ItemBlock key={addon.id} item={addon} category="addons" />
                    ))}
                </div>
                <h2 className={styles.total}>Total: ${addonsTotalAmount}</h2>
            </div>

            <div className={styles.selection}>
                <h1>Meals Selection</h1>
                <h2>Number of people: 
                    <input
                        type="number"
                        value={cart.people}
                        onChange={handlePeopleChange}
                        min="0"
                        className={styles.numberInput}
                    />
                </h2>
                <div className={styles.list}>
                    {meals.map(meal => (
                        <ItemBlock
                            key={meal.id}
                            item={meal}
                            category="meals"
                            onMealSelect={handleMealToggle}
                        />
                    ))}
                </div>
                <h2 className={styles.total}>Total: ${mealsTotalAmount}</h2>
            </div>
        </div>
    );
}

export default PlannerPage;

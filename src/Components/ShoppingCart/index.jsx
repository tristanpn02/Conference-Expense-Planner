import { useSelector } from 'react-redux';
import styles from './styles.module.css';

const ShoppingCart = ({ onClose }) => {
    const cart = useSelector(state => state.cart);

    const venuesTotalAmount = cart.venues.reduce((total, item) => total + item.price * item.quantity, 0);
    const addonsTotalAmount = cart.addons.reduce((total, item) => total + item.price * item.quantity, 0);
    const mealsTotalAmount = cart.meals.reduce((total, meal) => total + meal.price * cart.people, 0);

    const cartTotalAmount = venuesTotalAmount + addonsTotalAmount + mealsTotalAmount;

    return (
        <div className={styles.overlay}>
            <div className="content">
                
                <h1>Hi</h1>
                Total Venue Amount: {venuesTotalAmount}
                Total Addon Amount: {addonsTotalAmount}
                Total Meal Amount: {mealsTotalAmount}

                Total Cart Amount: {cartTotalAmount}
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    )
}

export default ShoppingCart;
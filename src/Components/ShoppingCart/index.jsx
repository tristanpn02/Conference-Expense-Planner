import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.css';
import { clearCart } from './CartSlice';

const ShoppingCart = ({ onClose }) => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    const venuesTotalAmount = cart.venues.reduce((total, item) => total + item.price * item.quantity, 0);
    const addonsTotalAmount = cart.addons.reduce((total, item) => total + item.price * item.quantity, 0);
    const mealsTotalAmount = cart.meals.reduce((total, meal) => total + meal.price * cart.people, 0);

    const cartTotalAmount = venuesTotalAmount + addonsTotalAmount + mealsTotalAmount;

    return (
        <div className={styles.overlay}>
            <div className={styles.content}>
                <h1>Your Shopping Cart</h1>
                
                <div className={styles.cartSection}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Unit Cost</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                        {cart.venues.map(item => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>${item.price.toFixed(2)}</td>
                                <td>${(item.price * item.quantity).toFixed(2)}</td>
                            </tr>
                        ))}

                        {cart.addons.map(item => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>${item.price.toFixed(2)}</td>
                                <td>${(item.price * item.quantity).toFixed(2)}</td>
                            </tr>
                        ))}

                        {cart.meals.map(item => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>For {cart.people} people</td>
                                <td>${item.price.toFixed(2)}</td>
                                <td>${(item.price * cart.people).toFixed(2)}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                <div className={styles.totalRow}>
                    Overall Total: <span className={styles.amount}>${cartTotalAmount.toFixed(2)}</span>
                </div>
                <button style={{marginRight: '10px'}} onClick={handleClearCart}>Clear Cart</button>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default ShoppingCart;

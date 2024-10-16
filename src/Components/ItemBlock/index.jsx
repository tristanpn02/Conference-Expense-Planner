import { useDispatch, useSelector } from 'react-redux';
import { addItem, decreaseItemQuantity, increaseItemQuantity } from '../ShoppingCart/CartSlice';
import styles from './styles.module.css';

const ItemBlock = ({ item, category, onMealSelect }) => {
    const dispatch = useDispatch();
    const cartItem = useSelector(state => state.cart[category].find(cartItem => cartItem.id === item.id));

    const handleIncreaseQuantity = () => {
        if (cartItem) {
            dispatch(increaseItemQuantity({ category, id: item.id }));
        } else {
            dispatch(addItem({ category, item }));
        }
    };

    const handleDecreaseQuantity = () => {
        dispatch(decreaseItemQuantity({ category, id: item.id }));
    };

    const handleMealCheckboxChange = () => {
        if (onMealSelect) {
            onMealSelect(item.id);
        }
    };

    const currentQuantity = cartItem ? cartItem.quantity : 0;
    const isMealSelected = category === "meals" && cartItem;

    return (
        <div className={styles.itemBlock} style={{ backgroundImage: `url(${item.img})` }}>
            <div className={styles.details}>
                <h2>{item.name}</h2>
                {item.capacity && <p>Capacity: {item.capacity}</p>}
                <p>Price: ${item.price}</p>

                {category === "meals" ? (
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                checked={isMealSelected}
                                onChange={handleMealCheckboxChange}
                            />
                            Select
                        </label>
                    </div>
                ) : (
                    <div className={styles.quantityControls}>
                        <button onClick={handleDecreaseQuantity} className={styles.quantityButton}>-</button>
                        <span className={styles.quantityDisplay}>{currentQuantity}</span>
                        <button onClick={handleIncreaseQuantity} className={styles.quantityButton}>+</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ItemBlock;

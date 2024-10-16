import { useDispatch, useSelector } from 'react-redux';
import { addItem, decreaseItemQuantity, increaseItemQuantity } from '../ShoppingCart/CartSlice';
import './styles.css';

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
        <div className="item-block" style={{ backgroundImage: `url(${item.img})` }}>
            <div className="details">
                <h2>{item.name}</h2>
                {item.capacity && <p>Capacity: {item.capacity}</p>}
                <p>Price: ${item.price}</p>

                {category === "meals" ? (
                    <div className="meal-checkbox">
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
                    <div className="quantity-controls">
                        <button onClick={handleDecreaseQuantity} className="quantity-btn">-</button>
                        <span className="quantity-display">{currentQuantity}</span>
                        <button onClick={handleIncreaseQuantity} className="quantity-btn">+</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ItemBlock;

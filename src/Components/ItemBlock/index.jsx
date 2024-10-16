import { useDispatch, useSelector } from 'react-redux';
import { addItem, decreaseItemQuantity, increaseItemQuantity } from '../ShoppingCart/CartSlice';
import './styles.css'

const ItemBlock = ({item, category}) => {
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

    const currentQuantity = cartItem ? cartItem.quantity : 0;

    return (
        <div className="item-block" style={{ backgroundImage: `url(${item.img})` }}>
            <div className="details">
                <h2>{item.name}</h2>
                <p>Capacity: {item.capacity}</p>
                <p>Price: ${item.price}</p>
                <div className="quantity-controls">
                    <button onClick={handleDecreaseQuantity} className="quantity-btn">-</button>
                    <span className="quantity-display">{currentQuantity}</span>
                    <button onClick={handleIncreaseQuantity} className="quantity-btn">+</button>
                </div>
            </div>
        </div>
    );
}

export default ItemBlock
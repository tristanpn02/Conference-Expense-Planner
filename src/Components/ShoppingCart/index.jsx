import styles from './styles.module.css';

const ShoppingCart = ({ onClose }) => {

    return (
        <div className={styles.overlay}>
            <div className="content">
                <h1>Hi</h1>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    )
}

export default ShoppingCart;
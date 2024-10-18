import { Link, NavLink } from "react-router-dom";

import styles from './styles.module.css'
import ShoppingCart from "../ShoppingCart";
import { useState } from "react";

const Header = ({ routes }) => {
    const [isCartVisible, setIsCartVisible] = useState(false);

    const toggleCart = () => {
        setIsCartVisible(!isCartVisible);
    };

    return (
        <div className={styles.header}>
            <Link to="/">
                <h1>Conference Expense Planner</h1>
            </Link>
            <nav className={styles.navBar}>
                <ul>
                    {routes.map((route, index) => ( !route.navbar ? '' :
                        <li key={index}>
                            <NavLink
                                className={({ isActive }) => (isActive ? 'active' : '')}
                                to={route.path}>
                                {route.title}
                            </NavLink>
                        </li>
                    ))}
                    <button onClick={toggleCart}>Show Details</button>
                </ul>
            </nav>
           {isCartVisible && <ShoppingCart onClose={toggleCart} />}
        </div>
    );
}

export default Header;


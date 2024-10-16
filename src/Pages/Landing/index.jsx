import styles from './styles.module.css';

import { Link } from 'react-router-dom';

const LandingPage = () => {

    return (
        <div className={styles.page}>
            <div className={styles.details}>
                <h1>Conference Expense Planner</h1>
                <h3>Welcome to Spilum.Net's Conference Expense Planner. With this tool you can do business things =)</h3>
                <br />
                <Link to="/planner">
                    <button className={styles.button}>Get Started</button>
                </Link>
            </div>
        </div>
    )
}

export default LandingPage;
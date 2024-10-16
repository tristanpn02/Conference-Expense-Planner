import './styles.css';

import { Link } from 'react-router-dom';

const LandingPage = () => {

    return (
        <div className="landing-page">
            <div className="details">
                <div className="title">
                    <h1>Conference Expense Planner</h1>
                    <p>Welcome to Spilum.Net's Conference Expense Planner. With this tool you can do business things =)</p>
                    <br />
                    <Link to="/planner">
                     <button className='get-started-btn'>Get Started</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;
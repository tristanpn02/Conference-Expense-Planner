import background from './tired-asian-business-woman-stress.webp';

const LandingPage = () => {

    return (
        <div className="landing-page" style={{ backgroundImage: `url(${background})` }}>
            <h1>Conference Expense Planner</h1>
            <p>Welcome to Spilum.Net's Conference Expense Planner. With this tool you can do business things =)</p>
        </div>
    )
}

export default LandingPage;
import './welcomeBackBanner.css'
function welcomeBanner() {
    return(
        <>
            {/* Welcome Banner */}
            <div className="welcome-banner">
                    <h2>Welcome back, Maria!</h2>
                    <p>Here's your program dashboard and latest updates</p>
                    <span className="status-badge">Active</span>
                    <p>You are currently enrolled and participating in the program.</p>
            </div>
        </>
    );

};
export default welcomeBanner;
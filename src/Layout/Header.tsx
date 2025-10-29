
import './header.css'; 

const Header = () => {
  return (
    <header>
      <div className="header-container">
        {/* Left Section: Logo/App Title */}
        <div className="logo-section">
              <h1>TUPAD & Pangkabuhayan</h1>
              <p>Beneficiary Portal</p>
        </div>

        {/* Right Section: User Info and Sign Out */}
        <div className="user-info-section">
          <div className="user-details">
                <p>Maria Santos</p>
                <p>BEN001</p>
          </div>
          <button className="sign-out-button">
            Sign Out
          </button>
        </div>
      </div>
      {/* You can uncomment the div below and its corresponding CSS if you need a thicker bottom line */}
      {/* <div className="bottom-border-line"></div> */}
    </header>
  );
};

export default Header;
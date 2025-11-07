
import './header.css'; 
import signOutButton from '../Components/Buttons/signOutButton';

function Header() {

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


          <button className="sign-out-button-header">
            {signOutButton()}
          </button>

        </div>
      </div>

    </header>
  );
}

export default Header;
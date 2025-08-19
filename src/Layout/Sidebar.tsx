// Sidebar.js
import './Sidebar.css'

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1>TUPAD & Pangkabuhayan</h1>
        <p>Admin Portal</p>
      </div>

      <ul className="nav-menu">
          <li className="nav-item ">
              <a href="Dashboard">Dashboard</a>
              <a href="Beneficiaries">Beneficiaries</a>
              <a href="Programs">Programs</a>
              <a href="Payment">Payment</a>
              <a href="Reports">Reports</a>
          </li>
      </ul>
    </div>
  );
}

export default Sidebar;
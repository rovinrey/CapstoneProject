// Sidebar.js
import './Sidebar.css';
// Import the Link component for navigation
import { Link } from 'react-router-dom';
// Import useState to manage the active menu state
import  { useState } from 'react';

// The imported page components are not used directly in the JSX, 
// so they can be removed unless you plan to use them here later.
// (e.g., Dashboard, Beneficiaries, Programs, PaymentPage, Reports)


function Sidebar() {
  // 1. Define 'menu' state and 'setMenu' function
  const [menu, setMenu] = useState("home"); 

  // Helper function to handle clicks and set the active menu
  const handleMenuClick = (menuName: any) => {
    setMenu(menuName);
  };   

  return (
    <div className="sidebar">
      
      {/* Sidebar Header (Top Section) */}
      <div className="sidebar-header">
        <h2>TUPAD & Pangkabuhayan</h2>
        <p className="subtitle">Management System</p>
        <p className="welcome-text">Welcome, System Administrator</p>
      </div>

      {/* Navigation Menu */}
      <nav className="sidebar-nav">
        <ul>
          
          <li 
            onClick={() => handleMenuClick("dashboard")}
            className={menu === "dashboard" ? "active" : ""}
          >
            {/* 2. Corrected: Use <Link> instead of <a> with an embedded component */}
            <Link to="/dashboard">Dashboard</Link>
            {menu === "dashboard" ? <hr/> : null}
          </li>
          
          <li 
            onClick={() => handleMenuClick("beneficiaries")}
            className={menu === "beneficiaries" ? "active" : ""}
          >
            <Link to="/dashboard/Beneficiaries">Beneficiaries</Link>
            {menu === "beneficiaries" ? <hr/> : null}
          </li>
          
          <li 
            onClick={() => handleMenuClick("programs")}
            className={menu === "programs" ? "active" : ""}
          >
            <Link to="/dashboard/Programs">Programs</Link>
            {menu === "programs" ? <hr/> : null}
          </li>
          
          <li 
            onClick={() => handleMenuClick("payment")}
            className={menu === "payment" ? "active" : ""}
          >
            <Link to="/dashboard/Payment">Payment</Link>
            {menu === "payment" ? <hr/> : null}
          </li>
          
          <li 
            onClick={() => handleMenuClick("reports")}
            className={menu === "reports" ? "active" : ""}
          >
            <Link to="/dashboard/Reports">Reports</Link>
            {menu === "reports" ? <hr/> : null}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
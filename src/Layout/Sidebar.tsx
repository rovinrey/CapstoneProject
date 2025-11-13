// Sidebar.js
import './Sidebar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import signOutButton from '../Components/Buttons/signOutButton';

function Sidebar() {
  // 1. Define 'menu' state and 'setMenu' function
  const [menu, setMenu] = useState("dashboard");

  // Helper function to handle clicks and set the active menu
  const handleMenuClick = (menuName: any) => {
    setMenu(menuName);
  };

  return (
    <div className="sidebar">

      {/* Sidebar Header */}
      <div className="sidebar-header">
        <h2>TUPAD & Pangkabuhayan</h2>
        <p className="subtitle">Management System</p>
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
            {menu === "dashboard"}
          </li>

          <li
            onClick={() => handleMenuClick("beneficiaries")}
            className={menu === "beneficiaries" ? "active" : ""}
          >
            <Link to="/dashboard/Beneficiaries">Beneficiaries</Link>
            {menu === "beneficiaries"}
          </li>

          <li
            onClick={() => handleMenuClick("programs")}
            className={menu === "programs" ? "active" : ""}
          >
            <Link to="/dashboard/Programs">Programs</Link>
            {menu === "programs"}
          </li>

          {/*
          <li
            onClick={() => handleMenuClick("payment")}
            className={menu === "payment" ? "active" : ""}
          >
            <Link to="/dashboard/Payment">Payment</Link>
            {menu === "payment"}
          </li>
          */}

          <li
            onClick={() => handleMenuClick("reports")}
            className={menu === "reports" ? "active" : ""}
          >
            <Link to="/dashboard/Reports">Reports</Link>
            {menu === "reports"}
          </li>
        </ul>
      </nav>
      {/* Sign Out Button */}
      <div className="sign-out-section">
        {signOutButton()}
      </div>
    </div>
  );
}

export default Sidebar;
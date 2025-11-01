import { FaCheckCircle } from "react-icons/fa";
import { FaPesoSign } from "react-icons/fa6";
import { IoIosBriefcase } from "react-icons/io";

/*import { Routes, Route } from "react-router-dom";

import Overview from "./TabsLInk/Overview";
import Payment from "./TabsLInk/Payment";
import Schedule from "./TabsLInk/Schedule";
import Documents from "./TabsLInk/Documents";
import Apply from "./TabsLInk/Apply";
*/
import "./BeneficiaryDashboard.css";
import Tabs from "./Tabs";
import Header from "../../Layout/Header";

function BeneficiaryDashboard() {
  return (
    <div>
      <Header />
      <div className="dashboard-container">
        {/* Welcome Banner */}
        <div className="welcome-banner">
              <h2>Welcome back, Maria!</h2>
              <p>Here's your program dashboard and latest updates</p>
              <span className="status-badge">Active</span>
              <p>You are currently enrolled and participating in the program.</p>
        </div>

        {/* Summary Cards */}
        <div className="summary-cards">
          <div className="card">
            <div className="card-icon">
                  <FaCheckCircle />
            </div>
            <div className="card-content">
                  <h3>Application ID</h3>
                  <p>BEN001</p>
            </div>
          </div>

          <div className="card">
            <div className="card-icon">
                  <FaPesoSign />
            </div>
            <div className="card-content">
                  <h3>Total Earnings</h3>
                  <p>₱15,750</p>
            </div>
          </div>

          <div className="card">
            <div className="card-icon">
                  <IoIosBriefcase />
            </div>
            <div className="card-content">
                  <h3>Program</h3>
                  <p>TUPAD - Community Cleaning</p>
            </div>
          </div>
        </div>

        {/* Program Progress */}
        <div className="program-progress">
          <div className="program-progress-header">
                  <h3>Program Progress</h3>
                  <span>Step 3 of 5</span>
          </div>  
          <div className="progress-bar-container">
            <div className="progress-bar"></div>
          </div>
          <p className="progress-text">You're 60% through your program</p>
        </div>

        {/* Horizontal Tabs */}
        <Tabs />

       
      </div>
    </div>
  );
}

export default BeneficiaryDashboard;

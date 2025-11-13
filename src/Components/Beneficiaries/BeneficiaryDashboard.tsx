import { FaCheckCircle } from "react-icons/fa";
import { FaPesoSign } from "react-icons/fa6";
import { IoIosBriefcase } from "react-icons/io";

/*import { Routes, Route } from "react-router-dom";

import Overview from "./TabsLInk/Overview";
import Payment from "./TabsLInk/Payment";
import Schedule from "./TabsLInk/Schedule";
import Documents from "./TabsLInk/Documents";
*/
import Apply from "./TabsLInk/Apply";

import "./BeneficiaryDashboard.css";
//import Tabs from "./Tabs";
import Header from "../../Layout/Header";


function BeneficiaryDashboard() {
  return (
    <div>
      <Header />

      <div className="dashboard-container">


        {/* Summary Cards 
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
              <p>₱2000</p>
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
          */}
        {/*
        
        <div className="program-progress">
          <div className="program-progress-header">
                  <h3>Program Progress</h3>
                  <span>Step 3 of 5</span>
          </div> 

         progress bar sample
          <div className="progress-bar-container">
            <div className="progress-bar"></div>
            </div>
              <p className="progress-text">You're 60% through your program</p>
          </div>
        */}

        {/* Horizontal Tabs 
                        <Tabs />
                        */}
        {/*application form*/}
        <Apply onCancel={function (): void {
          throw new Error("Function not implemented.");
        }} onSubmitData={function (data: any): void {
          throw new Error("Function not implemented.");
        }} />

      </div>
    </div>
  );
}

export default BeneficiaryDashboard;

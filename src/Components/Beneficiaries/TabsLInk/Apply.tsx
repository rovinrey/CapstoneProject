//import { useState } from 'react';
import './Apply.css';

function ApplicationForm() {

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    alert("Application submitted!");
  }
  return (
    <div className="application-form-container">
      <h3>Submit New Application</h3>
      <p>Apply for additional TUPAD or Pangkabuhayan</p>

      {/* Progress bar (add later) */}

      {/* Personal Information Section */}
      <section className="personal-information-container">
        <h4>Personal Information</h4>
        <form>
          <label>
            First Name* 
            <input type="text" name="firstName" required />
          </label>
          <label>
            Last Name*
            <input type="text" name="lastName" required />
          </label>
          <label>
            Middle Name*
            <input type="text" name="middleName" required />
          </label>

          <label>
            Date of Birth*
            <input type="date" name="dob" required />
          </label>
          {/*
          <label>
            Age*
            <input type="number" name="age" required />
          </label>
          */}
          <label>
            Gender*
            <select name="gender" required>
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>

          <label>
            Civil Status*
            <select name="civilStatus" required>
              <option value="">Select status</option>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="widowed">Widowed</option>
              <option value="separated">Separated</option>
            </select>
          </label>

          <label>
            Contact Number*
            <input type="tel" name="contact" required />
          </label>
          <label>
            Email Address*
            <input type="email" name="email" required />
          </label>
        </form>
      </section>

      {/* Address Information Section */}
      <section className="address-information">
        <h4>Address Information</h4>
        <form>
          <label>
            Home Number / Unit*
            <input type="text" name="homeNumber" required />
          </label>
          <label>
            Street*
            <input type="text" name="street" required />
          </label>
          <label>
            Barangay*
            <input type="text" name="barangay" required />
          </label>
          <label>
            Municipal / City*
            <input type="text" name="city" required />
          </label>
          <label>
            Province*
            <input type="text" name="province" required />
          </label>
          <label>
            Zip Code*
            <input type="text" name="zip" required />
          </label>
        </form>
      </section>

      {/* Program Information Section */}
      <section className="program-information">
        <h4>Program Information</h4>
        <div>
          <p>Program Type*</p>
          <div className="program-options">
            <label>
              <input type="radio" name="programType" value="tupad" required />
              TUPAD – Tulong Pangkabuhayan sa Ating Displaced/Disadvantaged Workers
            </label>
            <label>
              <input type="radio" name="programType" value="pangkabuhayan" required />
              Pangkabuhayan – Livelihood Programs
            </label>
          </div>

          <label>
            Availability*
            <select name="availability" required>
              <option value="">Select availability</option>
              <option value="fulltime">Full Time</option>
              <option value="parttime">Part Time</option>
              <option value="weekends">Weekends Only</option>
              <option value="flexible">Flexible Schedule</option>
            </select>
          </label>

          <label>
            Relevant Experience
            <input type="text" name="experience" />
          </label>
          <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>       
      </section>
    </div>
  );
}

export default ApplicationForm;

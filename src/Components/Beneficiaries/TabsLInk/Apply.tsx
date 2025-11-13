import { useState } from 'react';
import './Apply.css';

// Define the type for the event handler for clarity/error fixing
interface ChangeEvent {
    target: {
        name: string;
        value: any;
    };
}

// Accept onCancel AND a new onSave prop for handling data submission
function ApplicationForm({ onCancel, onSubmitData }: { onCancel: () => void, onSubmitData: (data: any) => void }) { 
    // State object to manage all form data
    const [formData, setFormData] = useState({
        programType: '',
        availability: '',
        experience: '',
        firstName: '',
        lastName: '',
        middleName: '',
        dob: '',
        age: '',
        gender: '',
        civilStatus: '',
        contact: '',
        homeNumber: '',
        street: '',
        barangay: '',
        city: '',
        province: '',
        zip: '',
    });

    // Unified change handler for all form fields
    const handleChange = (e: ChangeEvent) => { // Use the defined interface here
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // 1. Call the prop function and pass the final form data object
        onSubmitData(formData); 
        
        console.log("Form Data Submitted:", formData);
        
        // Optional: Clear the form state after successful submission
        // setFormData({ /* initial empty state here */ });

        // Call onCancel to close the form after successful submission
        if (onCancel) {
            onCancel();
        }
    }

    return (
        <div className="application-form-container">
            <h3>Submit New Application</h3>
            <p>Apply for additional TUPAD or Pangkabuhayan</p>

            <form onSubmit={handleSubmit}>
                {/* ... (Program Information Section) ... */}
                <section className="program-information">
                    <h4>Program Information</h4>
                    <div>
                        <p>Program Type*</p>
                        <div className="program-options">
                            {/* TUPAD */}
                            <label htmlFor="programTypeTupad">
                                <input
                                    type="radio"
                                    id="programTypeTupad"
                                    name="programType"
                                    value="tupad"
                                    checked={formData.programType === 'tupad'}
                                    onChange={handleChange}
                                    required
                                />
                                TUPAD - Tulong Pangkabuhayan sa Ating Displaced/Disadvantaged Workers
                            </label>
                            {/* Pangkabuhayan */}
                            <label htmlFor="programTypePangkabuhayan">
                                <input
                                    type="radio"
                                    id="programTypePangkabuhayan"
                                    name="programType"
                                    value="pangkabuhayan"
                                    checked={formData.programType === 'pangkabuhayan'}
                                    onChange={handleChange}
                                    required
                                />
                                Pangkabuhayan - Livelihood Programs
                            </label>
                        </div>
                        {/* Availability */}
                        <label htmlFor="availabilitySelect">
                            Availability* <select
                                id="availabilitySelect"
                                name="availability"
                                value={formData.availability}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select availability</option>
                                <option value="fulltime">Full Time</option>
                                <option value="parttime">Part Time</option>
                                <option value="weekends">Weekends Only</option>
                                <option value="flexible">Flexible Schedule</option>
                            </select>
                        </label>
                        {/* Relevant Experience */}
                        <label htmlFor="experienceInput">
                            Relevant Experience
                            <input
                                type="text"
                                id="experienceInput"
                                name="experience"
                                value={formData.experience}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                </section>
                
                {/* ... (Personal Information Section) ... */}
                <section className="personal-information-container">
                    <h4>Personal Information</h4>
                    <label htmlFor="firstNameInput">
                        First Name*<input
                            type="text"
                            id="firstNameInput"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label htmlFor="lastNameInput">
                        Last Name*
                        <input
                            type="text"
                            id="lastNameInput"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label htmlFor="middleNameInput">
                        Middle Name*
                        <input
                            type="text"
                            id="middleNameInput"
                            name="middleName"
                            value={formData.middleName}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label htmlFor="dobInput">
                        Date of Birth*
                        <input
                            type="date"
                            id="dobInput"
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label htmlFor="age">
                        Age*
                        <input
                            type="text"
                            id="AgeInput"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label htmlFor="genderSelect">
                        Gender*
                        <select
                            id="genderSelect"
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </label>
                    <label htmlFor="civilStatusSelect">
                        Civil Status*
                        <select
                            id="civilStatusSelect"
                            name="civilStatus"
                            value={formData.civilStatus}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select status</option>
                            <option value="single">Single</option>
                            <option value="married">Married</option>
                            <option value="widowed">Widowed</option>
                            <option value="separated">Separated</option>
                        </select>
                    </label>
                    <label htmlFor="contactInput">
                        Contact Number*
                        <input
                            type="tel"
                            id="contactInput"
                            name="contact"
                            value={formData.contact}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </section>

                {/* ... (Address Information Section) ... */}
                <section className="address-information">
                    <h4>Address Information</h4>
                    <label htmlFor="homeNumberInput">
                        Home Number / Unit*
                        <input
                            type="text"
                            id="homeNumberInput"
                            name="homeNumber"
                            value={formData.homeNumber}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label htmlFor="streetInput">
                        Street*
                        <input
                            type="text"
                            id="streetInput"
                            name="street"
                            value={formData.street}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label htmlFor="barangayInput">
                        Barangay*
                        <input
                            type="text"
                            id="barangayInput"
                            name="barangay"
                            value={formData.barangay}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label htmlFor="cityInput">
                        Municipal / City*
                        <input
                            type="text"
                            id="cityInput"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label htmlFor="provinceInput">
                        Province*
                        <input
                            type="text"
                            id="provinceInput"
                            name="province"
                            value={formData.province}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label htmlFor="zipInput">
                        Zip Code*
                        <input
                            type="text"
                            id="zipInput"
                            name="zip"
                            value={formData.zip}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    {/* Submit and Cancel Buttons */}
                    <div className="form-actions">
                        <button type="submit" className="submit-button">Submit Application</button>
                        {/* Cancel button uses the passed onCancel prop */}
                        {onCancel && (
                            <button type="button" onClick={onCancel} className="cancel-button">
                                Cancel
                            </button>
                        )}
                    </div>
                </section>
            </form>
        </div>
    );
}

export default ApplicationForm;
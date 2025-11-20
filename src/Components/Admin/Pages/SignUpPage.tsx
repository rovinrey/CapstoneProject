import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; 

// Assuming your Django API is running on this URL
const REGISTER_URL = "http://localhost:8000/api/register/"; 

// Define common styles outside the component for readability
const pageStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    gap: "60px", // Increased gap for better spacing
    fontFamily: "Roboto, sans-serif", // Using a common, clean font
    backgroundColor: '#f4f7f6', // Light background for contrast
};

const formContainerStyle = {
    backgroundColor: "#fff",
    padding: "35px 45px", // Adjusted padding
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)", // Cleaner shadow
    width: "380px",
    textAlign: "center",
};

const inputStyle = {
    padding: '12px',
    border: '1px solid #ddd',
    borderRadius: '6px',
    fontSize: '1rem',
    width: '100%',
    boxSizing: 'border-box',
    marginBottom: '10px', // Space between inputs
};

const buttonStyle = (loading) => ({
    width: '100%',
    padding: '12px',
    backgroundColor: loading ? '#6c757d' : '#007bff', 
    color: 'white', 
    border: 'none', 
    borderRadius: '6px', 
    fontSize: '1.1rem',
    cursor: loading ? 'not-allowed' : 'pointer',
    transition: 'background-color 0.3s',
    marginTop: '5px'
});


function SignUpPage() {
    // 💡 State to manage form inputs (keep the functionality)
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        password2: '',
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ 
            ...formData, 
            [e.target.name]: e.target.value 
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        if (formData.password !== formData.password2) {
            setError("Passwords do not match.");
            setLoading(false);
            return;
        }

        try {
            // Placeholder/API call logic remains the same
            await axios.post(REGISTER_URL, formData);
            alert("Registration successful! Please log in.");
            navigate('/login'); 

        } catch (err) {
            console.error("Registration error:", err.response);
            setError("Signup failed. Check details and try again."); // Simplified error message for style fix
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={pageStyle}>
            <h1 style={{ color: '#333', lineHeight: '1.3' }}>
                TUPAD and Pangkabuhayan <br />
                Management System
            </h1>
            
            <form
                onSubmit={handleSubmit}
                style={formContainerStyle}
            >
                <h2
                    style={{
                        fontSize: "1.8rem",
                        color: '#007bff',
                        marginBottom: '20px',
                    }}
                >
                    Create Account
                </h2>

                {/* 💡 Display error messages */}
                {error && <p style={{ color: '#dc3545', marginBottom: '15px', padding: '10px', border: '1px solid #f5c6cb', backgroundColor: '#f8d7da', borderRadius: '4px', fontSize: '0.9rem' }}>{error}</p>}
                
                {/* Input Fields Container */}
                <div style={{ marginBottom: '10px' }}>
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="Username" 
                        value={formData.username}
                        onChange={handleChange}
                        required
                        style={inputStyle} 
                        disabled={loading}
                    />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                        disabled={loading}
                    />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        value={formData.password}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                        disabled={loading}
                    />
                    <input 
                        type="password" 
                        name="password2" 
                        placeholder="Confirm Password" 
                        value={formData.password2}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                        disabled={loading}
                    />
                </div>

                <button 
                    type="submit" 
                    className="sign-up-button"
                    disabled={loading}
                    style={buttonStyle(loading)}
                >
                    {loading ? 'Signing Up...' : 'Signup'}
                </button>
                
                <p style={{ marginTop: '20px', fontSize: '0.95rem', color: '#6c757d' }}>
                    Already have an account? <Link to={"/login"} style={{ color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}>Login</Link>
                </p>
            </form>
        </div>
    );
};

export default SignUpPage;
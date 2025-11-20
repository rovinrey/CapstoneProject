import { Link } from "react-router-dom";
//import React from "react";
//import axios from "axios";

function SignUpPage() {
    //
    //const handleSubmit() {

    //}
    return (
        <>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                gap: '40px',
                fontFamily: 'arial, san-serif'

            }}>
                <h1>TUPAD and Pangkabuhayan <br />Management System</h1>
                <form style={{
                    backgroundColor: '#fff',
                    padding: '2.5rem',
                    borderRadius: '12px',
                    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.15)',
                    width: '350px',
                    textAlign: 'center'
                }}>
                    <h2 style={{
                        fontSize: '1.8rem',

                    }}>Signup</h2>


                    <input
                        type="text"
                        placeholder="full name"
                    />

                    <input
                        type="text"
                        placeholder="username"
                    />
                    <input
                        type="text"
                        placeholder="email or "
                    />
                    <input
                        type="text"
                        placeholder="Password"
                    />
                    <input
                        type="password"
                        placeholder="confirm password"
                    />

                    <button type="submit" className="sign-up-button">
                        signup
                    </button>
                    <p>Already have an account? <Link to={'/login'}>login
                    </Link> 

                    </p>

                </form>
            </div>
        </>
    );
};
export default SignUpPage;
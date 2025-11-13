//import { useState } from "react";
function SignUpPage() {

    return (
        <>
            <div className="signUp-container">
                <h1>TUPAD and Pangkabuhayan <br />Management System</h1>
                <form >
                    <h2 className="sign-up-form">Signup</h2>

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
                        placeholder="phone or email"
                    />
                      <input
                        type="password"
                        placeholder="Password"             
                    />
                    <input
                        type="password"
                        placeholder="confirm password"
                    />

                    <button type="submit" className="sign-up-button">          
                        signup
                    </button>
                </form>
            </div>
        </>
    );
};
export default SignUpPage;
function SignUpPage() {
    return (
        <>
            <div className="signUp-container">
                <h1>TUPAD and Pangkabuhayan <br />Management System</h1>
                <form onSubmit={handleLogin} className="login-box">
                    <h2 className="login-title">Login</h2>

                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="login-input"
                        required
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="login-input"
                        required
                    />

                    <button type="submit" className="login-btn">
                        Login
                    </button>
                </form>
            </div>
        </>
    );
};
export default SignUpPage;
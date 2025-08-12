import './LoginPage.css'

function LoginPage() {
    return(
    <>
      
        <h1 className='title'>TUPAD and PANGKABUHAYAN<br/> Management System</h1>
        <div className="login-form">
            <input type="text" placeholder="username"></input>
            <input type="text" placeholder="password"></input>
            <button>Login</button>
        </div>
    </>  
    );
}
export default LoginPage;
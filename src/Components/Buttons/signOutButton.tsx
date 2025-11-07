function signOutButton() {
  return (
    <button
      onClick={() => {
        // Clear user session data
        localStorage.removeItem('userToken');
        localStorage.removeItem('userData');    
        // Redirect to home page
        window.location.href = '/';
      }}
      className="sign-out-button"
    >                           
        Sign Out    
    </button>
    );
}

 export default signOutButton;
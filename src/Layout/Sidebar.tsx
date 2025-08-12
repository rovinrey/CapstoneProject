import './Sidebar.css'

function Sidebar() {
  return (
    <>
    <div id="mySidenav" className="sidenav">
        <a href="dashboard">Dashboard</a>
        <a href="#">Participants</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
    </div>
    </>
  );
}

export default Sidebar;
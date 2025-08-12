import './App.css'
import './Pages/LoginPage.css'
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard'
import Header from './Layout/Header'
import Sidebar from './Layout/Sidebar'
//import SideBar from './Layout/Sidebar'
function App() {

  return (
    <>
      <Header />
      <Sidebar />
      <Dashboard />

  
    
    </>
  )
}

export default App

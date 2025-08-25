import './App.css'
import './Pages/LoginPage.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './Components/Admin/Dashboard'
import Beneficiaries from './Pages/BeneficiariesPage';
import Programs from './Pages/Programs'
import PaymentPage from './Pages/PaymentPage';
//import Header from './Layout/Header'
import Sidebar from './Layout/Sidebar'
//import SideBar from './Layout/Sidebar'
function App() {

  return (
    <>
      <BrowserRouter>
      <Sidebar />

          <nav>
            <Link to="/dashboad">Dashboard</Link> |{" "}
            <Link to="/beneficiaries">Beneficiaries</Link> |{" "}
            <Link to="/programs">Programs</Link> | {" "}

          
          </nav>
          <Routes>
              < Route path="dashboard" element={<Dashboard />} />
              < Route path="beneficiaries" element={<Beneficiaries />} />
              < Route path="programs" element={<Programs />} />
              < Route path="payment" element={<PaymentPage />} />
          </Routes>
      </BrowserRouter>
        
   

  
    
    </>
  )
}

export default App

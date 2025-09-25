import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
//import { AuthProvider, useAuth } from './hooks/AuthContext';
//import type { ReactNode } from 'react';

import LoginPage from './Components/Admin/Pages/LoginPage';

// Admin pages
/*
import Sidebar from './Layout/Sidebar';
import Dashboard from './Components/Admin/Dashboard';
import Beneficiaries from './Components/Admin/Pages/BeneficiariesPage';
import Programs from './Components/Admin/Pages/Programs';
import PaymentPage from './Components/Admin/Pages/PaymentPage';
import Reports from './Components/Admin/Pages/Reports';
*/



// Beneficiary UI pages
//import BeneficiaryDashboard from './Components/Beneficiaries/BeneficiaryDashboard';
//import Header from './Layout/Header';
// import SignupPage from './Pages/SignupPage' 


function App() {
  return (
    <BrowserRouter>
    {/*Admin UI*/}
    {/*
    <Sidebar />
      <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="beneficiaries" element={<Beneficiaries />} />
          <Route path="programs" element={<Programs />} />
          <Route path="payment" element={<PaymentPage />} />
          <Route path="reports" element={<Reports />} />
      </Routes>
    */}

  

    {/*Beneficiary UI */}

     <LoginPage />
    {/*<Route>
       <Header />
        <BeneficiaryDashboard />
    </Route>
    */}
     
    </BrowserRouter>
  );
};

export default App;

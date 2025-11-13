import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Admin UI components
import Sidebar from './Layout/Sidebar';
import LoginPage from './Components/Admin/Pages/LoginPage';
import Dashboard from './Components/Admin/Dashboard';
import Beneficiaries from './Components/Admin/Pages/BeneficiariesPage';
import Programs from './Components/Admin/Pages/Programs';
import PaymentPage from './Components/Admin/Pages/PaymentPage';
import Reports from './Components/Admin/Pages/Reports';
import SignUpPage from './Components/Admin/Pages/SignUpPage';

// Beneficiary UI pages
import BeneficiaryDashboard from './Components/Beneficiaries/BeneficiaryDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root (/) to login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Public routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        {/* Admin routes */}
        <Route
          path="/dashboard/*"
          element={
            <div className="app-container">
              <Sidebar />
              <div className="main-content">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/Beneficiaries" element={<Beneficiaries />} />
                  <Route path="/Programs" element={<Programs />} />
                  <Route path="/Payment" element={<PaymentPage />} />
                  <Route path="/Reports" element={<Reports />} />
                </Routes>
              </div>
            </div>
          }
        />

        {/* Beneficiary UI */}
        <Route path="/beneficiarydashboard" element={<BeneficiaryDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Admin pages
import Sidebar from './Layout/Sidebar';
import LoginPage from './Components/Admin/Pages/LoginPage';
import Dashboard from './Components/Admin/Dashboard';
import Beneficiaries from './Components/Admin/Pages/BeneficiariesPage';
import Programs from './Components/Admin/Pages/Programs';
import PaymentPage from './Components/Admin/Pages/PaymentPage';
import Reports from './Components/Admin/Pages/Reports';

// Beneficiary UI pages
import BeneficiaryDashboard from './Components/Beneficiaries/BeneficiaryDashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public route */}
        <Route path="/" element={<LoginPage />} />

        {/* Admin routes (with sidebar layout) */}
        <Route
          path="/admin/*"
          element={
            <div className="flex">
              <Sidebar />
              <div className="flex-1 p-4">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="beneficiaries" element={<Beneficiaries />} />
                  <Route path="programs" element={<Programs />} />
                  <Route path="payment" element={<PaymentPage />} />
                  <Route path="reports" element={<Reports />} />
                </Routes>
              </div>
            </div>
          }
        />

        {/* Beneficiary UI */}
        <Route path="/beneficiarydashboard" element={<BeneficiaryDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// Admin UI components
import Sidebar from './Layout/Sidebar';
import LoginPage from './Components/Admin/Pages/LoginPage';
import Dashboard from './Components/Admin/Dashboard';
import Beneficiaries from './Components/Admin/Pages/BeneficiariesPage';
import Programs from './Components/Admin/Pages/Programs';
import PaymentPage from './Components/Admin/Pages/PaymentPage';
import Reports from './Components/Admin/Pages/Reports';
 
// Beneficiary UI pages
import BeneficiaryDashboard from './Components/Beneficiaries/BeneficiaryDashboard';

//tabs links
import Overview from './Components/Beneficiaries/TabsLInk/Overview';
import Payments from './Components/Beneficiaries/TabsLInk/Payment';
import Schedule from './Components/Beneficiaries/TabsLInk/Schedule';
import Documents from './Components/Beneficiaries/TabsLInk/Documents';
import Apply from './Components/Beneficiaries/TabsLInk/Apply';

function App() {
  return (
    <Router>
     
      <Routes>
        {/* Public route */}
        <Route path="/" element={<LoginPage />} />

        {/* Admin routes  */}

        <Route
          path="/dashboard/*"
          element={
            < div className="app-container">
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
        {/*tabs route */}
              <Route path="/overview" element={<Overview />} />
              <Route path="/payment" element={<Payments />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/documents" element={<Documents />} />
              <Route path="/apply" element={<Apply onCancel={undefined} />} />
      </Routes>
    </Router>
  );
}

export default App;

import './App.css';
import './Pages/LoginPage.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
//import { AuthProvider, useAuth } from './hooks/AuthContext';
//import type { ReactNode } from 'react';

//import LoginPage from './Pages/LoginPage';

// Admin pages
/*import Dashboard from './Components/Admin/Dashboard';
import Beneficiaries from './Pages/BeneficiariesPage';
import Programs from './Pages/Programs';
import PaymentPage from './Pages/PaymentPage';
import Sidebar from './Layout/Sidebar';
*/

// Beneficiary UI pages
import BeneficiaryDashboard from './Components/Beneficiaries/BeneficiaryDashboard';
import Header from './Layout/Header';
// import SignupPage from './Pages/SignupPage' 

/*interface PrivateRouteProps {
  children: ReactNode;
  role?: string;
}

function PrivateRoute({ children, role }: PrivateRouteProps) {
  const auth = useAuth();
  const user = auth?.user;
  if (!user) return <Navigate to="/login" />;
  if (role && user.role !== role) return <Navigate to="/login" />;
  return <>{children}</>;
}
  */
/* {/*<Route path="/login" element={<LoginPage />} /> */
          //{/* <Route path='/signup' element={<SignupPage />} /> */}

          //{/* Admin Routes */}
          
         // <Route
           // path="/admin"
            //element={
              //<PrivateRoute role="admin">
                //<AdminLayout />
              //</PrivateRoute>
           // }
         // >
           // <Route path="dashboard" element={<Dashboard />} />
           // <Route path="beneficiaries" element={<Beneficiaries />} />
            //<Route path="programs" element={<Programs />} />
            //<Route path="payment" element={<PaymentPage />} />
         // </Route>
          //}

          //{/* Beneficiary Routes */

function App() {
  return (
    <BrowserRouter>
  

    {/*Beneficiary UI */}
      <Header />
        <Routes>
          <Route path="/" element={<BeneficiaryDashboard />} />  
        </Routes>
    </BrowserRouter>
  );
};

export default App;

import './App.css'
import './Pages/LoginPage.css'
//import type { ReactNode } from 'react';
//import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
//import { AuthProvider, useAuth } from './hooks/AuthContext';

// Admin pages
import LoginPage from './Pages/LoginPage';
/*import Dashboard from './Components/Admin/Dashboard'
import Beneficiaries from './Pages/BeneficiariesPage';
import Programs from './Pages/Programs'
import PaymentPage from './Pages/PaymentPage';
//import Sidebar from './Layout/Sidebar'

*/

// Beneficiary UI pages
import BeneficiaryDashboard from './Components/Beneficiaries/BeneficiaryDashboard'
import Header from './Layout/Header';
// import SignupPage from './Pages/SignupPage' // <-- create this later

/*return (
    <Router>
      <AuthProvider>
        <Routes>
        
//{/* Auth Routes */
       //  <Route path='/login' element={<LoginPage />} />
         // {/* <Route path='/signup' element={<SignupPage />} /> */}

          //{/* Admin Routes with Nested Children */}
          //<Route
           // path='/admin'
           // element={
          //    <PrivateRoute role="admin">
            //    <AdminLayout />
           //   </PrivateRoute>
           // }
          //>
            //<Route path="dashboard" element={<Dashboard />} />
          //  <Route path="beneficiaries" element={<Beneficiaries />} />
          //  <Route path="programs" element={<Programs />} />
          //  <Route path="payment" element={<PaymentPage />} />
         // </Route>
      

          //{/* Beneficiary Routes */}
          //<Route
           // path="/beneficiary"
            //element={
              //<PrivateRoute role="beneficiary">
                //<BeneficiaryDashboard />
              //</PrivateRoute>
            //}
          ///>

          //{/* Fallback */}
          //<Route path="*" element={<Navigate to="/login" />} />
       // </Routes>
      //</AuthProvider>
    //</Router> */}


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

// Admin Layout with Sidebar + Outlet
function AdminLayout() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "1rem" }}>
        <Outlet />
      </div>
    </div>
  );
}
*/
function App() {
  return (
    <>
    <LoginPage />
    <Header />
    <BeneficiaryDashboard />
    </>
    
  );
}

export default App;

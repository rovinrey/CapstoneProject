import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './Tabs.css'
import '../Beneficiaries/TabsLInk/Apply.css'

// tabs import files 
import Apply from '../Beneficiaries/TabsLInk/Apply'
function Overview() {
  return <h1>Overview</h1>;
}

function Payment() {
  return <h1>Payment</h1>;
}

function Schedule() {
  return <h1>Schedule</h1>;
}
function Documents() {
  return <h1>Documents</h1>;
}
function Tabs() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <nav>
        <Link to="/overview">Overview</Link> |{" "}
        <Link to="/payment">Payment</Link> |{" "}
        <Link to="/schedule">Schedule</Link> |{" "}
        <Link to="/documents">Documents</Link> |{" "}
        <Link to="/apply">Apply</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/overview" element={<Overview/>} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Tabs;
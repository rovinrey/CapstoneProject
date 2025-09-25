import { NavLink } from "react-router-dom";
import "./Tabs.css";
import "../Beneficiaries/TabsLInk/Apply.css";

function Tabs() {
  return (
    <ul className="tabs">
      <li>
        <NavLink to="/overview" className={({ isActive }) => isActive ? "active" : ""}>
          Overview
        </NavLink>
      </li>
      <li>
        <NavLink to="/payment" className={({ isActive }) => isActive ? "active" : ""}>
          Payment
        </NavLink>
      </li>
      <li>
        <NavLink to="/schedule" className={({ isActive }) => isActive ? "active" : ""}>
          Schedule
        </NavLink>
      </li>
      <li>
        <NavLink to="/documents" className={({ isActive }) => isActive ? "active" : ""}>
          Documents
        </NavLink>
      </li>
      <li>
        <NavLink to="/apply" className={({ isActive }) => isActive ? "active" : ""}>
          Apply
        </NavLink>
      </li>
    </ul>
  );
}

export default Tabs;

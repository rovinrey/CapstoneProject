import { NavLink } from "react-router-dom";
import "./Tabs.css";
import "../Beneficiaries/TabsLInk/Apply.css";

function tabs() {
  return(
    <ul className="tabs">
      <li>
        <NavLink 
                to ='/overview' 
                className={({ isActive }) => (isActive ? 'active' : '')}
        >
                Overview
        </NavLink>
      </li>
    </ul>
  );
}

export default tabs;
import { Link } from "react-router-dom";
import "./Tabs.css";
import "../Beneficiaries/TabsLInk/Apply.css";

{/*
import Overview from "../Beneficiaries/TabsLInk/Overview";
import Payment from "../Beneficiaries/TabsLInk/Payment";
import Schedule from "../Beneficiaries/TabsLInk/Schedule";
import Documents from "../Beneficiaries/TabsLInk/Documents";
import Apply from "../Beneficiaries/TabsLInk/Apply";
*/}

import { useState } from "react";

function Tabs() {
  const [menu, setMenu] = useState("overview");

  return (
    <>
      {/* Navigation */}
      <ul>
        <li onClick={() => setMenu("overview")}>
          <Link to="/overview">Overview</Link>
          {menu === "overview" && <hr />}
        </li>
        <li onClick={() => setMenu("payment")}>
          <Link to="/payment">Payment</Link>
          {menu === "payment" && <hr />}
        </li>
        <li onClick={() => setMenu("schedule")}>
          <Link to="/schedule">Schedule</Link>
          {menu === "schedule" && <hr />}
        </li>
        <li onClick={() => setMenu("documents")}>
          <Link to="/documents">Documents</Link>
          {menu === "documents" && <hr />}
        </li>
        <li onClick={() => setMenu("apply")}>
          <Link to="/apply">Apply</Link>  
          {menu === "apply" && <hr />}
        </li>
      </ul>
    </>
  );
}

export default Tabs;

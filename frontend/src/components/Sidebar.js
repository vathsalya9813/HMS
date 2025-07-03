import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="sidebar-toggle-btn"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Close sidebar" : "Open sidebar"}
      >
        {open ? "✖" : "☰"}
      </button>
      <div className={`sidebar${open ? " open" : ""}`}>
        <h2>Dashboard</h2>
        <ul>
          <li>
            <NavLink to="/dashboard/student" className={({ isActive }) => (isActive ? "active" : "")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/student/services" className={({ isActive }) => (isActive ? "active" : "")}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/student/payments" className={({ isActive }) => (isActive ? "active" : "")}>
              Payments
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/student/mess" className={({ isActive }) => (isActive ? "active" : "")}>
              Mess
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/student/profile" className={({ isActive }) => (isActive ? "active" : "")}>
              Profile
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;

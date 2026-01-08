import React from "react";
import { Home, Map, Radio } from "lucide-react";
import "../styles/sidebar.css";

const Sidebar = ({ activePage, onPageChange }) => {
  const menuItems = [
    { name: "Home", icon: Home },
    { name: "Map", icon: Map },
    { name: "Station", icon: Radio }
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-title">SOLA</div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <button
            key={item.name}
            className={`nav-item ${activePage === item.name ? "active" : ""}`}
            onClick={() => onPageChange(item.name)}
          >
            <item.icon className="nav-icon" />
            <span>{item.name}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
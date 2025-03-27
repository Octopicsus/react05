import React from "react";
import { NavLink } from "react-router";
import "./Navigation.css";

export default function Navigation() {
  return (
    <div className="nav-wrapper">
      
      <NavLink 
        to="/contacts" 
        className={({ isActive }) => isActive ? "active-link" : "none-active-link"}
      >
        <button>Phones List</button>
      </NavLink>
      <NavLink 
        to="/add-contact" 
        className={({ isActive }) => isActive ? "active-link" : "none-active-link"}
      >
        <button>Add Contact</button>
      </NavLink>
    </div>
  );
}
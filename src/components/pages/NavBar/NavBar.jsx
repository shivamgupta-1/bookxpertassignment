import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./NavBar.scss";
import { useAuth } from "../../../contexts/AuthContext";

const NavBar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <NavLink to="/" className="nav-logo">
          BookXpert
        </NavLink>
        <div className="nav-links">
          {user && <span className="nav-user">{user}</span>}
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/dashboard" className="nav-link">
            Dashboard
          </NavLink>
          {user ? (
            <button className="nav-logout" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <NavLink to="/login" className="nav-link">
              Login
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

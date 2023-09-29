import React from "react";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink
          to="/"
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>Accueil</li>
        </NavLink>

        <li className="nav-portfolio">
          portfolio
          <ul className="nav-projects">
            <NavLink
              to="/project-1"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>project 1</li>
            </NavLink>
            <NavLink
              to="/project-2"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>project 2</li>
            </NavLink>
            <NavLink
              to="/project-3"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>project3</li>
            </NavLink>
            <NavLink
              to="/project-4"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>project4</li>
            </NavLink>
          </ul>
        </li>
        <NavLink
          to="/contact"
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>Contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
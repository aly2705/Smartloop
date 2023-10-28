import React from "react";
import "./serviceNavigation.css";
import { NavLink } from "react-router-dom";

function Button({ children }) {
  return <button className=" button-serv-nav">{children}</button>;
}

function ServiceNavigation() {
  return (
    <div className="daisy-join nav-pill ">
      <NavLink
        className={({ isActive }) =>
          isActive ? "  btn-nav  active" : "btn-nav "
        }
        to={"/public-services"}
      >
        <Button>Public</Button>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "  btn-nav  active" : "btn-nav "
        }
        to={"/private-services"}
      >
        <Button>Privat</Button>
      </NavLink>
    </div>
  );
}

export default ServiceNavigation;

import React from "react";
import "./serviceNavigation.css";
import { Link } from "react-router-dom";

function Button({ children }) {
  return <button className=" button-serv-nav">{children}</button>;
}

function ServiceNavigation() {
  return (
    <div className="daisy-join nav-pill">
      <Link className="btn-nav" to={"/PublicServicesPage"}>
        <Button>Public</Button>
      </Link>
      <Link className="btn-nav" to={"/PrivateServicesPage"}>
        <Button>Privat</Button>
      </Link>
    </div>
  );
}

export default ServiceNavigation;

import React from "react";
import ButtonService from "../../components/ButtonService/ButtonService";
import { NavLink } from "react-router-dom";
import "./landing.css";

const Landing = () => {
  return (
    <div>
      <div className="landingPageText">
        <h1>Bine ai venit!</h1>
        <h2>Ce tip de servicii cauți astăzi?</h2>
      </div>

      <div className="buttonServiceDisplay">
        <NavLink className="buttonServiceDisplay" to="/public-services">
          <ButtonService type="publice" />
        </NavLink>
        <NavLink className="buttonServiceDisplay" to="/private-services">
          <ButtonService type="private" />
        </NavLink>
      </div>
    </div>
  );
};

export default Landing;

import React from "react";
import "./privateServices.css";

function PrivateServices({ nume, img, desc, location, link }) {
  return (
    <div className="privateCard">
      <div className="privateSrv">
        <img className="prvImg" src={img} alt="" />
        <div className="privContainer">
          <h3>{nume}</h3>
          <p>
            <span>Location:</span> {location}
          </p>
          <p>
            <span>Description:</span> {desc}
          </p>
          <a className="btnAcces" href={link}>
            Accesează
          </a>
        </div>
      </div>
    </div>
  );
}

export default PrivateServices;

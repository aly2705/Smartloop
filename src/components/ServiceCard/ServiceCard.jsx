import React from "react";
import "./ServiceCard.css";

function ServiceCard({ type, src }) {
  return (
    <div>
      <div className="servicii">
        <img className="publicIcon" src={src} alt="" />
        <p className="textCard">{type}</p>
      </div>
    </div>
  );
}

export default ServiceCard;

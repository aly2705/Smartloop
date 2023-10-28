import * as React from "react";
import { Link } from "react-router-dom";

export default function Accordeon({ titlu, descriere, link }) {
  return (
    <div className="collapse bg-base-200">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">{titlu}</div>
      <div className="collapse-content">
        <p>{descriere}</p>
        <Link to={{ link }}>Programeaza-te</Link>
      </div>
    </div>
  );
}

import * as React from "react";
import { Link } from "react-router-dom";
import "./accordeon.css";

export default function Accordeon({ titlu, descriere, link }) {
  return (
    <div className="collapse collapse-arrow bg-base-200 accordeon">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">{titlu}</div>
      <div className="collapse-content">
        <p>{descriere}</p>
        <Link className="btn btn-primary" to={{ link }}>
          Mai multe detalii
        </Link>
      </div>
    </div>
  );
}

import React from "react";
import "./signUpForm.css";
import Contact from "../../components/Contact/Contact";
import BackButton from "../../components/BackButton/BackButton";
import { NavLink } from "react-router-dom";

function SignUpFormPage() {
  return (
    <div className="back-details">
      <NavLink to="/private-services">
        <BackButton />
      </NavLink>
      <h1>
        Completează acest formular pentru a îți putea oferi serviciile prin
        platforma noastră!
      </h1>
      <Contact></Contact>
    </div>
  );
}

export default SignUpFormPage;

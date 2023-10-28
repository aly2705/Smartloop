import React from "react";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import "./DevPage.css";
import ServiceNavigation from "../../components/ServiceNavigation/ServiceNavigation";
import PrivateServices from "../../components/PrivateServices/PrivateServices";
import ButtonService from "../../components/ButtonService/ButtonService";
import Contact from "../../components/Contact/Contact";
import Accordeon from "../../components/Accordeon/Accordeon";

const DevPage = () => {
  return (
    <div>
      <Contact />
      <Accordeon />
    </div>
  );
};

export default DevPage;

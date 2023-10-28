import React, { useRef, useEffect, useState } from "react";
import ServiceNavigation from "../../components/ServiceNavigation/ServiceNavigation";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { NavLink } from "react-router-dom";
import { db } from "../../config/firebase";
import { collection, getDocs, where, query } from "firebase/firestore";
import "./privateServ.css";

function PrivateServicesPage() {
  const [privateServices, setPrivateServices] = useState([]);
  const servicesQuery = useRef(
    query(collection(db, "services"), where("isPublic", "==", false))
  );

  useEffect(() => {
    const getPublicServices = async () => {
      try {
        const data = await getDocs(servicesQuery.current);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setPrivateServices(filteredData);
      } catch (err) {
        console.error(err);
      }
    };
    getPublicServices();
  }, [servicesQuery]);

  return (
    <div className="center">
      <ServiceNavigation />
      <div className="publicServDisplay">
        {privateServices.map((card, i) => {
          return (
            <NavLink to={`/private-list/${card.id}`} key={i}>
              <ServiceCard type={card.name} src={card.image} />
            </NavLink>
          );
        })}
      </div>
      <div className="register-paragraph">
        <h1>Ești furnizor de servicii?</h1>
        <h1>
          Fii parte din revoluția digitală înscriindu-ți serviciile pe platforma
          noastră !
        </h1>
        <NavLink to="/signup-page">
          <button className="btnAcces">Înscrie-te</button>
        </NavLink>
      </div>
    </div>
  );
}

export default PrivateServicesPage;

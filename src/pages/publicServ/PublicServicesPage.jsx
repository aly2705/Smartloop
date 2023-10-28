import React, { useEffect, useState, useRef } from "react";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import "./publicServ.css";
import { db } from "../../config/firebase";
import { collection, getDocs, where, query } from "firebase/firestore";
import { NavLink } from "react-router-dom";
import ServiceNavigation from "../../components/ServiceNavigation/ServiceNavigation";

function PublicServicesPage() {
  const [publicServices, setPublicServices] = useState([]);
  const servicesQuery = useRef(
    query(collection(db, "services"), where("isPublic", "==", true))
  );

  useEffect(() => {
    const getPublicServices = async () => {
      try {
        const data = await getDocs(servicesQuery.current);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setPublicServices(filteredData);
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
        {publicServices.map((card, i) => {
          return (
            <NavLink to={`/public-list/${card.id}`} key={i}>
              <ServiceCard key={i} type={card.name} src={card.image} />
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default PublicServicesPage;

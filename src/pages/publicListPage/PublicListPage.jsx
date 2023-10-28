import React, { useEffect, useState, useRef } from "react";
import "./publicList.css";
import Accordeon from "../../components/Accordeon/Accordeon";
import BackButton from "../../components/BackButton/BackButton";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { db } from "../../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import Search from "../../components/Search/Search";

function PublicListPage() {
  const { serviceId } = useParams();

  const [service, setService] = useState([]);
  const servicesRef = useRef(collection(db, `services`));

  useEffect(() => {
    const getPublicServices = async () => {
      try {
        const data = await getDocs(servicesRef.current);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setService(filteredData.find((data) => data.id === serviceId));
        console.log(filteredData.find((data) => data.id === serviceId));
      } catch (err) {
        console.error(err);
      }
    };
    getPublicServices();
  }, [servicesRef, serviceId]);

  return (
    <div className="public-details-page">
      <NavLink to="/public-services">
        <BackButton />
      </NavLink>

      <h2 className="service-title">{service.name}</h2>

      <div className="privateServiceDisplay">
        {service.faq?.length > 0 &&
          service.faq.map((card, i) => {
            return (
              <Accordeon
                key={i}
                id={i}
                titlu={card.q}
                descriere={card.a}
                link={card.l}
              />
            );
          })}
      </div>
      <div className="pubSearch">
        <Search />
      </div>
    </div>
  );
}

export default PublicListPage;

import React, { useEffect, useState, useRef } from "react";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import "./publicServ.css";
import { db } from "../../config/firebase";
import { collection, getDocs, where } from "firebase/firestore";

function PublicServicesPage() {
  const [publicServices, setPublicServices] = useState([]);
  const servicesRef = useRef(collection(db, "services"));

  useEffect(() => {
    const getPublicServices = async () => {
      try {
        const data = await getDocs(
          servicesRef.current,
          where("isPublic", "==", true)
        );
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setPublicServices(filteredData);
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };
    getPublicServices();
  }, [servicesRef]);

  return (
    <div>
      <div className="publicServDisplay">
        {publicServices.map((card, i) => {
          return <ServiceCard key={i} type={card.name} src={card.image} />;
        })}
      </div>
    </div>
  );
}

export default PublicServicesPage;

import React, { useRef, useState } from "react";
import "./contact.css";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

function Contact() {
  const [agree, setAgree] = useState(false);
  const nameRef = useRef("");
  const imageRef = useRef("");
  const websiteRef = useRef("");
  const locationRef = useRef("");
  const descRef = useRef("");
  const serviceRef = useRef("");

  const checkboxHandler = () => {
    // if agree === true, it will be set to false
    // if agree === false, it will be set to true
    setAgree(!agree);
    // Don't miss the exclamation mark
  };

  // When the button is clicked
  const handleSubmitRegisterService = async (e) => {
    e.preventDefault();

    const body = {
      name: nameRef.current.value,
      image: imageRef.current.value,
      website: websiteRef.current.value,
      location: locationRef.current.value,
      description: descRef.current.value,
    };

    const collectionRef = collection(db, "services");
    const q = query(
      collectionRef,
      where("name", "==", serviceRef.current.value)
    );

    try {
      const data = await getDocs(q);

      const serviceId = data.docs.at(0).id;

      const providersCollectionRef = collection(
        db,
        `services/${serviceId}/providers`
      );
      await addDoc(providersCollectionRef, body);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="formContainer">
      <form
        className="contact-form"
        id="contact"
        onSubmit={handleSubmitRegisterService}
      >
        <div>
          <label htmlFor="name">Nume</label>

          <input type="text" name="" id="name" placeholder="Doe" />
        </div>
        <div>
          <label htmlFor="pname">Prenume</label>

          <input type="text" name="" id="pname" placeholder="Jhon" />
        </div>
        <div>
          <label htmlFor="phone">Telefon</label>

          <input type="text" name="" id="phone" placeholder="+07xx xxx xxx" />
        </div>
        <div>
          <label htmlFor="fname">Nume firmă</label>

          <input
            type="text"
            name=""
            id="fname"
            placeholder="Acest nume va fi afisat pe site"
            ref={nameRef}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>

          <input type="text" name="" id="email" placeholder="email@email.com" />
        </div>
        <div>
          <label htmlFor="tip">Tip serviciu oferit</label>

          <select name="tip" id="tip" ref={serviceRef}>
            <option value="Stomatologie">Stomatologie</option>
            <option value="Imobiliare">Imobiliare</option>
            <option value="Avocatura">Avocatura</option>
            <option value="Notariat">Notariat</option>
          </select>
        </div>
        <div>
          <label htmlFor="adress">Adresă</label>
          <input
            type="text"
            name=""
            id="adress"
            placeholder="Strada, bloc etc."
            ref={locationRef}
          />
        </div>

        <div>
          <label htmlFor="desc">Descriere servicii</label>
          <input
            type="text"
            name=""
            id="desc"
            placeholder="Oferim servicii de..."
            ref={descRef}
          />
        </div>
        <div>
          <label htmlFor="linc">Link website</label>
          <input
            type="text"
            name=""
            id="linc"
            placeholder="www.website.com"
            ref={websiteRef}
          />
        </div>

        <div>
          <label htmlFor="imag">URL imagine de prezentare</label>

          <input type="text" name="" id="imag" ref={imageRef} />
        </div>

        <div className="containerf">
          <div id="chbox">
            <input type="checkbox" id="agree" onChange={checkboxHandler} />
            <label htmlFor="agree">
              Accept <b>termenii si conditiile</b>
            </label>
          </div>

          <button disabled={!agree} className="btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;

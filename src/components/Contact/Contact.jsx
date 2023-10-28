import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div className="formContainer">
      <form className="contact-form" id="contact">
        <div>
          <label htmlFor="name">Nume</label>

          <input type="text" name="" id="name" />
        </div>
        <div>
          <label htmlFor="pname">Prenume</label>

          <input type="text" name="" id="pname" />
        </div>
        <div>
          <label htmlFor="phone">Telefon</label>

          <input type="text" name="" id="phone" />
        </div>
        <div>
          <label htmlFor="fname">Nume firmă</label>

          <input
            type="text"
            name=""
            id="fname"
            placeholder="Acest nume se va afisa pe site"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>

          <input type="text" name="" id="email" />
        </div>
        <div>
          <label htmlFor="tip">Tip serviciu oferit</label>

          <select name="tip" id="tip">
            <option value="stoma">Stomatologie</option>
            <option value="med">Medical</option>
            <option value="avocatura">Avocatura</option>
            <option value="notariat">Notariat</option>
          </select>
        </div>
        <div>
          <label htmlFor="adress">Adresă </label>

          <input type="text" name="" id="adress" />
        </div>

        <div>
          <label htmlFor="desc">Descriere servicii</label>

          <input type="text" name="" id="desc" />
        </div>
        <div>
          <label htmlFor="linc">Link website</label>

          <input type="text" name="" id="linc" />
        </div>
      </form>
    </div>
  );
}

export default Contact;

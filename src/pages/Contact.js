import React from "react";
import ContactForm from "../components/ContactForm";
import Navigation from "../components/Navigation";
import SocialNetwork from "../components/SocialNetwork";
import Email from "../style/img/Email.png";

const Contact = () => {
  return (
    <main>
      <Navigation />
      <h1 className="title">Contact</h1>
      <SocialNetwork />
      <div className="contactContainer">
        <ContactForm />
        <div className="contactInfos">
          <div className="contactcontent">
            <h2>Idrissa SY</h2>
            <a href="tel:+33612154581">
              <i class="fa-solid fa-phone"></i>06.12.15.45.81
            </a>
          </div>
          <div>
            <img src={Email} alt="email" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;

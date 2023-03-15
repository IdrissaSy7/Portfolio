import React, { useRef } from "react";
import emailjs from "emailjs-com";
emailjs.init("zQPbTheShUwGswrR1");

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formMess = document.querySelector(".formMessage");

    emailjs
      .sendForm(
        "service_at72r5h",
        "template_qgldlzt",
        form.current,
        "zQPbTheShUwGswrR1"
      )
      .then(
        (res) => {
          form.current.reset();
          formMess.innerHTML = "<p className='success'>Message envoyé !</p>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2000);
        },
        (err) => {
          formMess.innerHTML =
            "<p className='error'>Une erreur s'est produite, veuillez réessayer</p>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 4000);
        }
      );
  };

  return (
    <div className="form-container">
      <div className="form1">
        <form ref={form} onSubmit={sendEmail} className="form-content">
          <label className="label">Nom</label>
          <input
            type="text"
            name="name"
            required
            autoComplete="off"
            id="name"
          />
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            required
            autoComplete="off"
            id="email"
          />
          <label className="label">Message</label>
          <textarea name="message" id="mess" />
          <input type="submit" value="Envoyer" className="button" />
        </form>
      </div>
      <div className="formMessage"></div>
    </div>
  );
};

export default ContactForm;

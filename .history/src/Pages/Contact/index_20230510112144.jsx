import './Contact.css'
import React from "react";
import emailjs from "emailjs-com";

function contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_44u8cjr",
        "template_inhqe9s",
        e.target,
        "jY6fr33_qx03DtRyDDBOY",
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <form onSubmit={sendEmail}>
      <label>Nom</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="reply_to" />
      <label>Message</label>
      <textarea name="message" />
      <button type="submit">Envoyer</button>
    </form>
  );
}

export default contact;

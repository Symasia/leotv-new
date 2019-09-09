import React from "react";
import ContactForm from "./ContactForm.jsx";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="Contact">
      <div className="contact-form">
        <div className="contact-info">
        <h2 style={{lineHeight: "30px", fontSize: "28px"}}>Want to join us? Have your program in our telecast? Hit us up!</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
            officia, perferendis quo eveniet est quam laborum repellendus
            quibusdam, accusamus saepe eum hic voluptatum laudantium? Fugit
            quasi quaerat obcaecati non modi! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Consectetur nemo repellendus
            dignissimos dolorum eveniet, sit similique adipisci placeat aliquam
            est quasi assumenda nisi quis unde, hic sapiente eum omnis
            accusamus. 
          </p>
          <span style={{fontWeight: "bold"}}>(+94) 12345689</span>
          <span style={{fontWeight: "bold"}}>Facebook</span>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;

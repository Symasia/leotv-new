import React from "react";
import errorMethods from "./errorMethods.js";
import "./Contact.css";

const initState = {
  email: "",
  title: "",
  message: ""
};

const formErrors = {
  email: {
    errors: {
      //eslint-disable-next-line
      pattern: ["^\\S+@\\S+$", "Email invalid."]
    }
  },
  title: {
    errors: {
      minLength: [20, "Please have aleast %v more characters."],
      maxLength: [200, "A good title should be less than %v characters."]
    }
  },
  message: {
    errors: {
      minLength: [100, "You need atleast %v characters more."],
      maxLength: [2000, "Only %v characters are allowed."]
    }
  }
};

const ContactForm = () => {
  const [formData, setFormData] = React.useState({ ...initState });
  const [errorMessages, setErrorMessage] = React.useState({ ...initState, formValid: false });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    validateForm(name, value);
    return;
  };

  const validateForm = (fieldName, fieldValue) => {
    const { errors } = formErrors[fieldName];

    Object.keys(errors).some(method => {
      const validationResult = errorMethods[method](fieldValue, errors[method]);
      setErrorMessage({ ...errorMessages, [fieldName]: validationResult });
      return validationResult;
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const isFormValid = Object.keys(errorMessages).every(
      key => errorMessages[key] === ""
    );
    if (isFormValid) {
      setFormData({ ...initState });
      alert("Your message was processed successfully.");
      return;
    }
    alert("Please correct the issues with your message.");
  };

  return (
    <form onSubmit={handleSubmit} className="add-message">
      <h2>Contact Us</h2>
      <p className="subtitle">
        Please fill all the fields and then submit the form, then you will receive an email from one of our members regarding your query.
      </p>

      <div className="form-item">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <span className="error">{errorMessages.email}</span>
      </div>

      <div className="form-item">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <span className="error">{errorMessages.title}</span>
      </div>

      <div className="form-item">
        <label htmlFor="message">Message</label>
        <textarea
          style={{ resize: "none" }}
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        <span className="error">{errorMessages.message}</span>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;

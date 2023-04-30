import React, { FC, useState } from "react";
import { Action } from "../../reducer/contactsReducer";

import "./ContactForm.css";
interface ContactFormProps {
  dispatch: React.Dispatch<Action>;
}
const ContactForm: FC<ContactFormProps> = ({ dispatch }) => {
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    phone: "",
  });
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setContact((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch({
      type: "ADD_CONTACT",
      payload: contact,
    });
  };

  return (
    <div className="contacform-container">
      <form onSubmit={(event) => handleOnSubmit(event)} className="contacform">
        <h4>Contact Form</h4>
        <label>First Name</label>
        <input
          className="firstName"
          name="firstName"
          value={contact.firstName}
          type="text"
          onChange={(event) => handleOnChange(event)}
        />

        <label>Last Name</label>
        <input
          className="lastName"
          name="lastName"
          value={contact.lastName}
          type="text"
          onChange={(event) => handleOnChange(event)}
        />
        <label>Phone</label>
        <input
          className="phone"
          name="phone"
          value={contact.phone}
          type="number"
          onChange={(event) => handleOnChange(event)}
        />
        <button type="submit" className="submit-btn">
          Add Contact
        </button>
      </form>
    </div>
  );
};
export default ContactForm;

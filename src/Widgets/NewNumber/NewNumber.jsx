import React, { useState } from "react";
import "./NewNumber.css";

export default function NewNumber({ addContact, switchToList }) {
  const [newContact, setNewContact] = useState({ name: "", phone: "" });
  const [errors, setErrors] = useState({ name: "", phone: "" });

  const validateName = (name) => {
    const nameRegex = /^[A-Za-zА-Яа-яЁё\s]+$/;
    return nameRegex.test(name) ? "" : "Invalid";
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9()\-\s]+$/;
    return phoneRegex.test(phone) ? "" : "Invalid";
  };

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    const updatedContact = { ...newContact };
    const updatedErrors = { ...errors };

    if (inputName === "inputName") {
      updatedContact.name = inputValue;
      updatedErrors.name = validateName(inputValue);
    } else {
      updatedContact.phone = inputValue;
      updatedErrors.phone = validatePhone(inputValue);
    }

    setNewContact(updatedContact);
    setErrors(updatedErrors);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (newContact.name && newContact.phone) {
      addContact({
        id: newContact.name,
        name: newContact.name,
        phone: newContact.phone,
      });
      setNewContact({ name: "", phone: "" });
      switchToList();
    }
  };

  const isFormValid =
    !errors.name && !errors.phone && newContact.name && newContact.phone;

  return (
    <div>
      <form onSubmit={handleSubmit} className="contact-form">
        <h3>New Contact</h3>

        <div className="input-group">
          <label htmlFor="inputName">Name: </label>
          <input
            type="text"
            id="inputName"
            name="inputName"
            value={newContact.name}
            onChange={handleChange}
          />
          {errors.name && <div className="error-message">{errors.name}</div>}
        </div>

        <div className="input-group">
          <label htmlFor="inputPhone">Phone: </label>
          <input
            type="text"
            id="inputPhone"
            name="inputPhone"
            value={newContact.phone}
            onChange={handleChange}
          />
          {errors.phone && <div className="error-message">{errors.phone}</div>}
        </div>

        <button type="submit" className="addBtn" disabled={!isFormValid}>
          Add
        </button>
      </form>
    </div>
  );
}

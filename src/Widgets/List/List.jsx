import React, { useEffect, useState } from "react";
import "./List.css";
import ContactItem from "../ContactItem/ContactItem";
import EditorPopup from "../EditorPopup/EditorPopup";

export default function List({ contacts: propContacts = [], updateContact }) {
  const [apiContacts, setApiContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMode, setPopupMode] = useState("edit"); 

  const getDefaultList = async () => {
    try {
      const apiUrl = "https://jsonplaceholder.typicode.com/users";

      const response = await fetch(apiUrl);
      const data = await response.json();

      setApiContacts(data);
    } catch (error) {
      console.log("UNFOUND DATA");
    }
  };

  useEffect(() => {
    getDefaultList();
  }, []);

  const handleEditClick = (contact) => {
    setEditingContact(contact);
    setPopupMode("edit");
    setShowPopup(true);
  };

  const handleDeleteClick = (contact) => {
    setEditingContact(contact);
    setPopupMode("delete");
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setEditingContact(null);
  };

  const handleSaveEdit = (updatedContact) => {
    const isApiContact = apiContacts.some(
      (contact) => contact.id === updatedContact.id
    );

    if (isApiContact) {
      setApiContacts(
        apiContacts.map((contact) =>
          contact.id === updatedContact.id ? updatedContact : contact
        )
      );
    } else {
      updateContact(updatedContact);
    }

    handleClosePopup();
  };

  const handleDeleteContact = (contactId) => {
    if (apiContacts.some((contact) => contact.id === contactId)) {
      setApiContacts(apiContacts.filter((contact) => contact.id !== contactId));
    } 

    handleClosePopup();
  };

  const allContacts = [...propContacts, ...apiContacts];

  return (
    <>
      <div className="list-wrapper">
        <h3 className="list-title">Phone list</h3>
        <ul className="contact-list">
          {allContacts.map((item) => (
            <li key={item.id}>
              <ContactItem
                name={item.name}
                phoneNumber={item.phone}
              />
              <button 
                className="edit-btn" 
                onClick={() => handleEditClick(item)}
              ></button>
              <button 
                className="delete-btn" 
                onClick={() => handleDeleteClick(item)}
              ></button>
            </li>
          ))}
        </ul>

        {showPopup && editingContact && (
          <EditorPopup
            contact={editingContact}
            onClose={handleClosePopup}
            onSave={handleSaveEdit}
            onDelete={handleDeleteContact}
            mode={popupMode}
          />
        )}
      </div>
    </>
  );
}
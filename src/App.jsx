import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { useState } from "react";
import "./App.css";
import Navigation from "./Widgets/Navigation/Navigation";
import List from "./Widgets/List/List";
import NewNumber from "./Widgets/NewNumber/NewNumber";

function App() {
  const [contacts, setContacts] = useState([]);

  const addContact = (newContact) => {
    setContacts([newContact, ...contacts]);
  };

  const updateContact = (updatedContact) => {
    setContacts(
      contacts.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact
      )
    );
  };

  return (
    <BrowserRouter>
    
      {<Navigation />}
      <Routes>
      <Route
          path="/"
          element={<Navigate replace to='/contacts' />}
        />
        <Route
          path="/contacts"
          element={<List contacts={contacts} updateContact={updateContact} />}
        />
        <Route
          path="/add-contact"
          element={<NewNumber addContact={addContact} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

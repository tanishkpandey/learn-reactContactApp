import React, { useState, useEffect } from "react";
import ContactCard from "./ContactCard";
import { v4 as uuidv4 } from 'uuid';

const Addcontact = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Load contacts from local storage when the component mounts
    console.log("Loading contacts from local storage...");
    const storedContacts = localStorage.getItem("contacts");
    console.log("Stored contacts:", storedContacts);
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []); // Empty dependency array to ensure this effect runs only once on component mount

  useEffect(() => {
    // Save contacts to local storage whenever contacts state changes
    console.log("Saving contacts to local storage:", contacts);
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]); // Run this effect whenever contacts state changes

  const handleAddContact = () => {
    if (name && email) {
      const newContact = { id: uuidv4(), name, email };
      setContacts([...contacts, newContact]);
      setEmail("");
      setName("");
    }
    else{
      window.alert('Please enter email and password')
    }
  };

  const handleDeleteContact = (id) => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
  };

  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form className="ui form">
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          className="ui button blue"
          type="button"
          onClick={handleAddContact}
        >
          Add
        </button>
      </form>

      {/* To display the contacts */}

      <div className="ui celled list">
        {contacts.map((contact) => (
          <ContactCard
            key={contact.id}
            contact={contact}
            onDelete={handleDeleteContact}
          />
        ))}
      </div>
    </div>
  );
};
export default Addcontact;

import React, { useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactsList/ContactsList';

import { addContact } from './helpers/addContact';
import { handleChange } from './helpers/handleChange';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

 const handleAddContact = name => {
   const updatedContacts = addContact(contacts, name);
   setContacts(updatedContacts);
 };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm
        name={name}
        number={number}
        onChange={event => handleChange(event, setName, setNumber)}
        onSubmit={handleAddContact}
      />
      <h2>Contacts</h2>
      <ContactList contacts={contacts} />
    </div>
  );
};

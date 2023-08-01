import React, { useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactsList/ContactsList';
import { ContactsFilter } from './ContactsFilter/ContactsFilter';

import { addContact } from './helpers/addContact';
import { handleChange } from './helpers/handleChange';
import { filterContacts } from './helpers/filterContacts';

export const App = () => {
  const initialContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
  const [contacts, setContacts] = useState(initialContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [filter, setFilter] = useState('');

  const handleAddContact = (name, number) => {
    const updatedContacts = addContact(contacts, name, number);
    setContacts(updatedContacts);
  };

  const filteredContacts = filterContacts(contacts, filter);

  const handleFilterChange = event => {
    setFilter(event.target.value);
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
      <ContactsFilter filter={filter} onChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} />
    </div>
  );
};

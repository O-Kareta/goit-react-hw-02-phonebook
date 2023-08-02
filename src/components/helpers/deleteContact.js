export const deleteContact = (contacts, id) => {
  return contacts.filter(contact => contact.id !== id);
};

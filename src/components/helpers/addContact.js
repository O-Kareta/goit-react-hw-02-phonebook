import {generateUniqueId} from './generateUniqueId';

export const addContact = (contacts, name) => {
  const newContact = {
    id: generateUniqueId(), 
    name,
  };
  return [...contacts, newContact];
};

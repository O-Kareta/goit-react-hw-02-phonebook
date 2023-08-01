import { generateUniqueId } from './generateUniqueId';

export const addContact = (contacts, name, number) => {
  const newContact = {
    id: generateUniqueId(),
    name,
    number,
  };
  return [...contacts, newContact];
};

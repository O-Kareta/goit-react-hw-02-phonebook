import css from './ContactsList.module.css';

export const ContactList = ({ contacts }) => {
  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <li className={css.listItem} key={contact.id}>
          {contact.name}: {contact.number}
        </li>
      ))}
    </ul>
  );
};

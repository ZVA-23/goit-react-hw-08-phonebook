import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/contactsOperations';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Container } from '../Container/Container';
import {
  ContactFormTitle,
  ContactFormLabel,
  ContactFormTitleInput,
  ContactFormInput,
  ContactFormBtn,
} from './ContactForm.styled';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const newContactName = name.toLowerCase();
    if (
      contacts.some(contact => contact.name.toLowerCase() === newContactName)
    ) {
      alert(`${newContactName.name} is already in contacts`);
      return;
    }
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <Container>
      <ContactFormTitle>Add new contact</ContactFormTitle>
      <form onSubmit={handleSubmit}>
        <ContactFormLabel>
          <ContactFormTitleInput>Name</ContactFormTitleInput>
          <ContactFormInput
            onChange={handleChange}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Enter name"
            required
          />
        </ContactFormLabel>
        <ContactFormLabel>
          <ContactFormTitleInput>Number</ContactFormTitleInput>
          <ContactFormInput
            onChange={handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            placeholder="Enter phone number"
          />
        </ContactFormLabel>
        <ContactFormBtn type="submit">Add contact</ContactFormBtn>
      </form>
    </Container>
  );
};

ContactForm.prototypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};

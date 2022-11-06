import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts } from 'redux/filter/filterSelectors';
import { selectFilter } from 'redux/filter/filterSelectors';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { Container } from '../Container/Container';
import {
  ContactLi,
  ContactItem,
  ContacName,
  ContactListBtn,
} from './ContactList.styled';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <Container>
      <ContactLi>
        {visibleContacts
          .filter(contact => contact.name.toLowerCase().includes(filter))
          .map(({ name, number, id }) => (
            <ContactItem key={id}>
              <p>
                <ContacName>{name}:</ContacName> {number}
              </p>
              <ContactListBtn
                type="button"
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
              </ContactListBtn>
            </ContactItem>
          ))}
      </ContactLi>
    </Container>
  );
};

import { Container, Title, Subtitle } from './App.styled';
import { Form } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';

export function App() {
  return (
    <>
      <Container>
        <Title>Phonebook</Title>
        <Form />
        <Subtitle>Contacts</Subtitle>
        <Filter />
        <ContactList />
      </Container>
    </>
  );
}

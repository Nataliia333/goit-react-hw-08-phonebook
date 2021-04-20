import { Component } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactsList from '../ContactsList/ContactsList';
import Container from '../Container/Container';
import Filter from '../Filter/Filter';

export default class Contacts extends Component {
  render() {
    return (
      <Container>
        <h2>Form Contact</h2>
        <ContactForm />
        <h2>Contacts List</h2>
        <Filter />
        <ContactsList />
      </Container>
    );
  }
}

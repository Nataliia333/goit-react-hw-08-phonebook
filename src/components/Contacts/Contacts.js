import { Component } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactsList from '../ContactsList/ContactsList';
import Filter from '../Filter/Filter';

export default class Contacts extends Component {
  render() {
    return (
      <>
        <h2>Form Contact</h2>
        <ContactForm />
        <h2>Contacts List</h2>
        <Filter />
        <ContactsList />
      </>
    );
  }
}

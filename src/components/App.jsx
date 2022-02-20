import React, { Component } from 'react';

import contacts from './data/contacts.json';

import Section from './Section';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

class App extends Component {
  state = {
    contacts: contacts,
    filter: '',
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contac => contac.id !== contactId),
    }));
  };

  formSubmitHandler = data => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, data],
    }));
  };

  filterForm = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
    this.findContact();
  };

  findContact = () => {
    // console.log(
    //   this.state.contacts.filter(contact =>
    //     contact.name.includce(this.state.filter)
    //   )
    // );
  };

  render() {
    this.findContact();
    return (
      <>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.formSubmitHandler} />
        </Section>

        <Section title="Contacts">
          <Filter value={this.state.filter} onChange={this.filterForm} />
          <ContactList
            contacts={this.state.contacts}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}

export default App;

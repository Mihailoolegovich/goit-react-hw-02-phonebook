import React, { Component } from 'react';

import contacts from './data/contacts.json';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

class App extends Component {
  state = {
    contacts: contacts,

    filter: '',
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm />

        <h1>Contacts</h1>
        <Filter />
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;

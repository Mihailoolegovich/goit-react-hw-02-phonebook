import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class ContactList extends Component {
  state = {
    name: '',
    number: '',
  };
  render() {
    return (
      <ul>
        {this.props.contacts.map(contact => (
          <li key={nanoid()}>
            <p>
              {contact.name}: <span>{contact.number}</span>
            </p>
            <button type="button">Delete</button>
          </li>
        ))}
      </ul>
    );
  }
}

export default ContactList;

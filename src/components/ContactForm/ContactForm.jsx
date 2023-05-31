import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import s from './ContactForm.module.css'

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  static propTypes = {
    onAddContact: PropTypes.func.isRequired,
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleAddContact = e => {
    e.preventDefault()
    const newContact = {
      id: nanoid(),
      name: this.state.name.trim(),
      number: this.state.number.trim(),
    };
    this.props.onAddContact(newContact);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={s.form} onSubmit={this.handleAddContact}>
        <label>
          Name
          <input
            className={s.input}
            placeholder='Enter name'
            type="text"
            value={name}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
          />
        </label>
        <label>
          Number
            <input
            className={s.input}
            placeholder='Enter number'
            type="tel"
            value={number}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
          />
        </label>

        <button type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;

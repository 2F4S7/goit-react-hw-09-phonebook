import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TextField, Button } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import { addContact } from '../../redux/contacts/contacts-operations';
import { getContacts } from '../../redux/contacts/contacts-selectors';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleChange = useCallback(event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        console.warn(`Тип поля ${name} не обрабатывается`);
    }
  }, []);

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();
      const names = contacts.map(contact => contact.name);

      names.includes(name)
        ? alert(`${name} is already in contacts`)
        : dispatch(addContact({ name, number }));

      resetForm();
    },
    [dispatch, contacts, name, number],
  );

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        variant="outlined"
        type="text"
        name="name"
        required
        value={name}
        onChange={handleChange}
        margin="dense"
        required
      />
      <TextField
        label="Number"
        variant="outlined"
        type="tel"
        name="number"
        required
        value={number}
        onChange={handleChange}
        margin="dense"
        placeholder="38-0XX-XXX-XX-XX"
        pattern="[0-9]{2}-[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
        required
      />
      <Button
        variant="contained"
        color="default"
        size="large"
        startIcon={<SaveIcon />}
        type="submit"
      >
        Save Contact
      </Button>
    </form>
  );
};

export default ContactForm;

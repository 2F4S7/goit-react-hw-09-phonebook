import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField, Button } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import { addContact } from '../../redux/contacts/contacts-operations';
import { getContacts } from '../../redux/contacts/contacts-selectors';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name } = this.state;
    const names = this.props.contacts.map(contact => contact.name);

    names.includes(name)
      ? alert(`${name} is already in contacts`)
      : this.props.onSubmit({ ...this.state });

    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    const { handleSubmit, handleChange } = this;

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
        {/* <Button
          className={styles.button}
          variant="contained"
          color="primary"
          type="submit"
          size="large"
        >
          Add Contact
        </Button> */}
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
  }
}

const mapStateToProps = state => ({
  contacts: getContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: contact => {
    return dispatch(addContact(contact));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

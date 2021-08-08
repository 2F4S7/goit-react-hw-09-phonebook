import React from 'react';
import styles from '../App.module.css';
import AllContact from '../components/Section/AllContact';
import NewContact from '../components/Section/NewContact';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';

const ContactsView = () => {
  return (
    <div className={styles.wrapper}>
      <NewContact title="reate contact">
        <ContactForm />
      </NewContact>

      <AllContact title="Сontact list">
        <Filter />
        <ContactList />
      </AllContact>
    </div>
  );
};

export default ContactsView;

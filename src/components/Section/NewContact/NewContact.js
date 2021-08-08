import React from 'react';
import PropTypes from 'prop-types';
import styles from './NewContact.module.css';

const NewContact = ({ title, children }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </section>
  );
};

export default NewContact;

NewContact.defaultProps = {
  title: 'New contact',
};

NewContact.propTypes = {
  title: PropTypes.string,
};

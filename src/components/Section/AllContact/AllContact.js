import React from 'react';
import PropTypes from 'prop-types';
import styles from './AllContact.module.css';

const AllContact = ({ title, children }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </section>
  );
};

export default AllContact;

AllContact.defaultProps = {
  title: 'All contact',
};

AllContact.propTypes = {
  title: PropTypes.string,
};

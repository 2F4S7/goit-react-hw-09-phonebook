import React from 'react';
import Loader from 'react-loader-spinner';
import styles from './Loader.module.css';

const AppLoader = () => {
  return (
    <Loader
      className={styles.loader}
      type="Circles"
      color="#f50057"
      height={100}
      width={100}
      timeout={3000} //3 secs
    />
  );
};

export default AppLoader;

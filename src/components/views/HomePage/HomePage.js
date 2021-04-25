import React from 'react';
import styles from './HomePage.module.scss';
import PropTypes from 'prop-types';

const HomePage = ({children }) => {
  return (
    <div className={styles.root}>
      <h2>HomePage</h2>
      {children}
    </div>
  );
};

HomePage.propTypes = {
  children: PropTypes.node,
};

export default HomePage ;

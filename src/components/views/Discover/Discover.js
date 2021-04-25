import React from 'react';
import styles from './Discover.module.scss';
import PropTypes from 'prop-types';

const Discover = ({children }) => {
  return (
    <div className={styles.root}>
      <h2>Discover</h2>
      {children}
    </div>
  );
};

Discover.propTypes = {
  children: PropTypes.node,
};

export default Discover ;

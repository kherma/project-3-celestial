import React from 'react';
import styles from './Cart.module.scss';
import PropTypes from 'prop-types';

const Component = ({children }) => {
  return (
    <div className={styles.root}>
      <h2>Cart</h2>
      {children}
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
};

export { Component as Cart };

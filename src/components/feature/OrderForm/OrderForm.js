import React from 'react';
import styles from './OrderForm.module.scss';
import PropTypes from 'prop-types';

const OrderForm = ({children }) => {
  return (
    <div className={styles.root}>
      <h2>OrderForm</h2>
      {children}
    </div>
  );
};

OrderForm.propTypes = {
  children: PropTypes.node,
};

export default OrderForm ;

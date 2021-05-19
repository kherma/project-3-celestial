import React from 'react';
import styles from './DeliveryForm.module.scss';
import PropTypes from 'prop-types';

const DeliveryForm = ({children }) => {
  return (
    <div className={styles.root}>
      <h2>DeliveryForm</h2>
      {children}
    </div>
  );
};

DeliveryForm.propTypes = {
  children: PropTypes.node,
};

export default DeliveryForm ;

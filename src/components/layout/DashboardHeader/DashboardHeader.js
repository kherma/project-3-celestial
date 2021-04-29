import React from 'react';
import styles from './DashboardHeader.module.scss';
import PropTypes from 'prop-types';

const DashboardHeader = ({ children }) => {
  return (
    <div className={styles.root}>
      <h2>Header</h2>
      {children}
    </div>
  );
};

DashboardHeader.propTypes = {
  children: PropTypes.node,
};

export default DashboardHeader;

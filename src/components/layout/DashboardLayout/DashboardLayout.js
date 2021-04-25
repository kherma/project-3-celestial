import React from 'react';
import styles from './DashboardLayout.module.scss';
import PropTypes from 'prop-types';

const DashboardLayout = ({children }) => {
  return (
    <div className={styles.root}>
      <h2>DashboardLayout</h2>
      {children}
    </div>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.node,
};

export default DashboardLayout ;

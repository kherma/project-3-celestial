import React from 'react';
import styles from './Dashboard.module.scss';
import PropTypes from 'prop-types';

const Dashboard = ({ children }) => {
  return (
    <div className={styles.root}>
      <h2>Main</h2>
    </div>
  );
};

Dashboard.propTypes = {
  children: PropTypes.node,
};

export default Dashboard;

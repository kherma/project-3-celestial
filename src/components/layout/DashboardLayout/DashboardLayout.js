import React from 'react';
import styles from './DashboardLayout.module.scss';
import PropTypes from 'prop-types';

import DashboardHeader from '../DashboardHeader/DashboardHeader';
import DashboardAside from '../DashboardAside/DashboardAside';

const DashboardLayout = ({ children }) => {
  return (
    <div className={styles.root}>
      <DashboardAside />
      <div className={styles.container}>
        <DashboardHeader />
        <main className={styles.dashboardMain}>{children}</main>
      </div>
    </div>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.node,
};

export default DashboardLayout;

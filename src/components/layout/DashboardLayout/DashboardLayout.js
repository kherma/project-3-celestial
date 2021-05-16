import React from 'react';
import styles from './DashboardLayout.module.scss';
import PropTypes from 'prop-types';

import DashboardHeader from '../DashboardHeader/DashboardHeaderContainer';
import DashboardAside from '../DashboardAside/DashboardAsideContainer';
import Modal from '../../feature/ModalBox/ModalBoxContainer';

const DashboardLayout = ({ children, modal: { show } }) => {
  return (
    <div className={styles.root}>
      <DashboardAside />
      <div className={styles.container}>
        <DashboardHeader />
        <main className={styles.dashboardMain}>
          {children}
          {show && <Modal />}
        </main>
      </div>
    </div>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.node,
  modal: PropTypes.object,
};

DashboardLayout.defaultProps = {
  modal: {},
};

export default DashboardLayout;

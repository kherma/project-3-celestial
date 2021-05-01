import React from 'react';
import styles from './DashboardHeader.module.scss';
// import PropTypes from 'prop-types';

const DashboardHeader = () => {
  return (
    <header className={styles.root}>
      <h2>Header</h2>
    </header>
  );
};

// DashboardHeader.propTypes = {
//   props: PropTypes.node,
// };

export default DashboardHeader;

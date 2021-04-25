import React from 'react';
import styles from './Settings.module.scss';
import PropTypes from 'prop-types';

const Settings = ({children }) => {
  return (
    <div className={styles.root}>
      <h2>Settings</h2>
      {children}
    </div>
  );
};

Settings.propTypes = {
  children: PropTypes.node,
};

export default Settings ;

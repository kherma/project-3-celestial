import React from 'react';
import styles from './Settings.module.scss';
// import PropTypes from 'prop-types';

import PersonaWidget from '../../feature/PersonaWidget/PersonaWidget';

const Settings = () => {
  return (
    <div className={styles.root}>
      <PersonaWidget />
    </div>
  );
};

// Settings.propTypes = {
// };

export default Settings;

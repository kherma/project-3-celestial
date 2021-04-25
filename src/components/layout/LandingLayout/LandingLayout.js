import React from 'react';
import styles from './LandingLayout.module.scss';
import PropTypes from 'prop-types';

const LandingLayout = ({children }) => {
  return (
    <div className={styles.root}>
      <h2>LandingLayout</h2>
      {children}
    </div>
  );
};

LandingLayout.propTypes = {
  children: PropTypes.node,
};

export default LandingLayout ;

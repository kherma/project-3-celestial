import React from 'react';
import styles from './CreateProfile.module.scss';
import PropTypes from 'prop-types';

const Component = ({children }) => {
  return (
    <div className={styles.root}>
      <h2>CreateProfile</h2>
      {children}
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
};

export { Component as CreateProfile };

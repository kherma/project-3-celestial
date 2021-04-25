import React from 'react';
import styles from './LandingLayout.module.scss';
import PropTypes from 'prop-types';

const Component = ({ children }) => {
  return <div className={styles.root}>{children}</div>;
};

Component.propTypes = {
  children: PropTypes.node,
};

export { Component as LandingLayout };

import React from 'react';
import styles from './MainLayout.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Component = ({ className, children }) => {
  return (
    <div className={clsx(className, styles.root)}>
      <h2>MainLayout</h2>
      {children}
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export { Component as MainLayout };

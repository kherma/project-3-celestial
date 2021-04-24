import React from 'react';
import styles from './{{pascalCase name}}.module.scss';
import PropTypes from 'prop-types';

const Component = ({children }) => {
  return (
    <div className={styles.root}>
      <h2>{{pascalCase name}}</h2>
      {children}
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
};

export { Component as {{pascalCase name}} };

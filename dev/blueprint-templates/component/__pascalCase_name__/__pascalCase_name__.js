import React from 'react';
import styles from './{{pascalCase name}}.module.scss';
import PropTypes from 'prop-types';

const {{pascalCase name}} = ({children }) => {
  return (
    <div className={styles.root}>
      <h2>{{pascalCase name}}</h2>
      {children}
    </div>
  );
};

{{pascalCase name}}.propTypes = {
  children: PropTypes.node,
};

export default {{pascalCase name}} ;

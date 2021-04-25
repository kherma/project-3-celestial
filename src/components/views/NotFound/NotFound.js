import React from 'react';
import styles from './NotFound.module.scss';
import PropTypes from 'prop-types';

const NotFound = ({children }) => {
  return (
    <div className={styles.root}>
      <h2>NotFound</h2>
      {children}
    </div>
  );
};

NotFound.propTypes = {
  children: PropTypes.node,
};

export default NotFound ;

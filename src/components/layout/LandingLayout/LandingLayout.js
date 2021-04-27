import React from 'react';
import styles from './LandingLayout.module.scss';
import PropTypes from 'prop-types';

import LandingHeader from '../LandingHeader/LandingHeader';
import LandingFooter from '../LandingFooter/LandingFooter';

const LandingLayout = ({ children }) => {
  return (
    <div className={styles.root}>
      <LandingHeader />
      {children}
      <LandingFooter />
    </div>
  );
};

LandingLayout.propTypes = {
  children: PropTypes.node,
};

export default LandingLayout;

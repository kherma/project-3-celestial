import React from 'react';
import styles from './LandingLayout.module.scss';
import PropTypes from 'prop-types';

import LandingHeader from '../LandingHeader/LandingHeader';
import LandingFooter from '../LandingFooter/LandingFooter';
import LoginBox from '../../common/LoginBox/LoginBox';
import MainInfoBox from '../../common/MainInfoBox/MainInfoBox';

const LandingLayout = ({ children }) => {
  return (
    <div className={styles.root}>
      <LandingHeader />
      <main className={styles.main}>
        <aside className={styles.aside}>
          <LoginBox />
          <MainInfoBox />
        </aside>
        {children}
      </main>
      <LandingFooter />
    </div>
  );
};

LandingLayout.propTypes = {
  children: PropTypes.node,
};

export default LandingLayout;

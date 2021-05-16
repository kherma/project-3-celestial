import React, { useEffect } from 'react';
import styles from './DashboardHeader.module.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { FaShoppingCart } from 'react-icons/fa';

import TopbarMobile from '../../feature/TopbarMobile/TopbarMobileContainer';
import TopbarDesktop from '../../feature/TopbarDesktop/TopbarDesktopContainer';

const DashboardHeader = ({ toggleAside, setExtras }) => {
  useEffect(() => {
    localStorage.getItem('extras') && setExtras();
  }, [setExtras]);
  return (
    <header className={styles.root}>
      {window.matchMedia('(max-width: 1224px)').matches && (
        <div className={styles.mobileMenu} onClick={toggleAside}>
          <span className={styles.hamburger}></span>
        </div>
      )}
      <section className={styles.navbarSection}>
        {window.matchMedia('(max-width: 1223px)').matches && <TopbarMobile />}
        {window.matchMedia('(min-width: 1224px)').matches && <TopbarDesktop />}
        <nav className={styles.cartContainer}>
          <NavLink
            exact
            to="/cart"
            className={styles.cartLink}
            activeClassName={styles.active}
          >
            <FaShoppingCart className={styles.cartIcon} />
          </NavLink>
        </nav>
      </section>
    </header>
  );
};

DashboardHeader.propTypes = {
  toggleAside: PropTypes.func,
  setExtras: PropTypes.func,
};

export default DashboardHeader;

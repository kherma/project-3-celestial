import React from 'react';
import styles from './DashboardHeader.module.scss';
import { NavLink } from 'react-router-dom';

import { FaShoppingCart } from 'react-icons/fa';

import TopbarMobile from '../../feature/TopbarMobile/TopbarMobile';
import TopbarDesktop from '../../feature/TopbarDesktop/TopbarDesktop';

const DashboardHeader = () => {
  return (
    <header className={styles.root}>
      {window.matchMedia('(max-width: 1224px)').matches && (
        <div className={styles.mobileMenu}>
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

// DashboardHeader.propTypes = {
//   props: PropTypes.node,
// };

export default DashboardHeader;

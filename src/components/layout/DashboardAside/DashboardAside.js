import React from 'react';
import styles from './DashboardAside.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import { IoClose } from 'react-icons/io5';

import PersonaAside from '../../feature/PersonaAside/PersonaAsideContainer';
import CurrancyDisplay from '../../common/CurrancyDisplay/CurrancyDisplay';
import DashboardNavigation from '../DashboardNavigation/DashboardNavigationContainer';

const DashboardAside = ({ menuStatus, toggleAside }) => {
  return (
    <aside
      className={clsx(styles.root, menuStatus ? styles.show : styles.hide)}
    >
      <section className={styles.logoSection}>
        {window.matchMedia('(max-width: 1224px)').matches && (
          <div className={styles.closeAside} onClick={toggleAside}>
            <IoClose />
          </div>
        )}
        <h1 className={styles.logo}>Celestial</h1>
      </section>
      <PersonaAside />
      <CurrancyDisplay
        amount={10000}
        containerClass={styles.currancyContainer}
      />
      <DashboardNavigation />
      <section className={styles.logoutSection}>
        <Link className={styles.logoutBtn} to="/">
          quit
        </Link>
      </section>
    </aside>
  );
};

DashboardAside.propTypes = {
  menuStatus: PropTypes.bool,
  toggleAside: PropTypes.func,
};

export default DashboardAside;

import React from 'react';
import styles from './DashboardAside.module.scss';
import { Link } from 'react-router-dom';

import PersonaAside from '../../feature/PersonaAside/PersonaAside';
import CurrancyDisplay from '../../common/CurrancyDisplay/CurrancyDisplay';
import DashboardNavigation from '../DashboardNavigation/DashboardNavigation';

const DashboardAside = () => {
  return (
    <aside className={styles.root}>
      <section className={styles.logoSection}>
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

export default DashboardAside;

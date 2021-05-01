import React from 'react';
import styles from './DashboardNavigation.module.scss';
import { NavLink } from 'react-router-dom';

const DashboardNavigation = () => {
  return (
    <nav className={styles.root}>
      <NavLink
        exact
        to="/dashboard"
        className={styles.navLink}
        activeClassName={styles.active}
      >
        dashboard
      </NavLink>
      <NavLink
        exact
        to="/explore"
        className={styles.navLink}
        activeClassName={styles.active}
      >
        explore
      </NavLink>
      <NavLink
        exact
        to="/discover"
        className={styles.navLink}
        activeClassName={styles.active}
      >
        discover
      </NavLink>
      <NavLink
        exact
        to="/settings"
        className={styles.navLink}
        activeClassName={styles.active}
      >
        persona
      </NavLink>
    </nav>
  );
};

export default DashboardNavigation;

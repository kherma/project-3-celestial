import React from 'react';
import styles from './DashboardNavigation.module.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const DashboardNavigation = ({ menuLinks, toggleAside }) => {
  return (
    <nav className={styles.root}>
      {menuLinks.map(({ text, linkTo, id }) => {
        return window.matchMedia('(min-width: 1224px)').matches ? (
          <NavLink
            key={id}
            exact
            to={`${linkTo}`}
            className={styles.navLink}
            activeClassName={styles.active}
          >
            {text}
          </NavLink>
        ) : (
          <NavLink
            key={id}
            exact
            to={`${linkTo}`}
            className={styles.navLink}
            activeClassName={styles.active}
            onClick={toggleAside}
          >
            {text}
          </NavLink>
        );
      })}
    </nav>
  );
};

DashboardNavigation.propTypes = {
  menuLinks: PropTypes.array,
  toggleAside: PropTypes.func,
};

DashboardNavigation.defaultProps = {
  menuLinks: [],
};

export default DashboardNavigation;

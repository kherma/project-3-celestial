import React from 'react';
import styles from './PersonaAside.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';

const PersonaCharacter = ({ userData: { username, persona }, toggleMenu }) => {
  return (
    <section className={styles.root}>
      <div className={styles.characterContainer}>
        {persona ? (
          <h3>Persona</h3>
        ) : window.matchMedia('(min-width: 1224px)').matches ? (
          <Link to="/settings" className={styles.characterAdd} />
        ) : (
          <Link
            to="/settings"
            className={styles.characterAdd}
            onClick={toggleMenu}
          />
        )}
      </div>
      <div className={styles.characterHeart}>
        <FaHeart
          className={clsx(styles.heart, persona ? styles.alive : styles.break)}
        />
      </div>
      <h6 className={styles.characterName}>
        {username ? `${username}` : <>-&#x0002F;-</>}
      </h6>
    </section>
  );
};

PersonaCharacter.propTypes = {
  userData: PropTypes.object,
  username: PropTypes.string,
  persona: PropTypes.bool,
  toggleMenu: PropTypes.func,
};

PersonaCharacter.defaultProps = {
  userData: {},
  username: '',
  persona: false,
};

export default PersonaCharacter;

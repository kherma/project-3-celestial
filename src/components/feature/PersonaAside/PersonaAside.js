import React from 'react';
import styles from './PersonaAside.module.scss';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';

const personaExist = false;

const PersonaCharacter = () => {
  return (
    <section className={styles.root}>
      <div className={styles.characterContainer}>
        {personaExist ? (
          <h3>Persona</h3>
        ) : (
          <Link to="/settings" className={styles.characterAdd}></Link>
        )}
      </div>
      <div className={styles.characterHeart}>
        <FaHeart
          className={clsx(
            styles.heart,
            personaExist ? styles.alive : styles.break
          )}
        />
      </div>
      <h6 className={styles.characterName}>
        {personaExist ? 'username' : <>-&#x0002F;-</>}
      </h6>
    </section>
  );
};

export default PersonaCharacter;

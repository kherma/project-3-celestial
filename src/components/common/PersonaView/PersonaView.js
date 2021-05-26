import React from 'react';
import styles from './PersonaView.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const PersonaView = ({ gender }) => {
  return (
    <div
      className={clsx(styles.root, gender.current === 'dark' && styles.dark)}
      ref={gender}
    >
      <div className={styles.hairBack}></div>
      <div className={styles.hairFront}></div>
      <div className={styles.head}></div>
      <div className={styles.blushes}></div>
      <div className={styles.eyes}></div>
      <div className={styles.mouth}></div>
      <div className={styles.neck}></div>
      <div className={styles.body}></div>
    </div>
  );
};

PersonaView.propTypes = {
  gender: PropTypes.object,
};

PersonaView.defaultProps = {
  gender: {},
};

export default PersonaView;

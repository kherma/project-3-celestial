import React from 'react';
import styles from './SizeComparison.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const SizeComparison = ({ size }) => {
  return (
    <div className={styles.root}>
      <span
        className={clsx(
          styles.planetSize,
          styles.planetSmall,
          size === 'small' && styles.active
        )}
      ></span>
      <span
        className={clsx(
          styles.planetSize,
          styles.planetMedium,
          size === 'medium' && styles.active
        )}
      ></span>
      <span
        className={clsx(
          styles.planetSize,
          styles.planetLarge,
          size === 'large' && styles.active
        )}
      ></span>
      <span
        className={clsx(
          styles.planetSize,
          styles.planetHuge,
          size === 'huge' && styles.active
        )}
      ></span>
    </div>
  );
};

SizeComparison.propTypes = {
  size: PropTypes.string,
};

export default SizeComparison;

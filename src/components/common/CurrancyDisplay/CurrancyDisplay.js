import React from 'react';
import styles from './CurrancyDisplay.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const CurrancyDisplay = ({ containerClass, amount }) => {
  return (
    <section className={clsx(styles.root, containerClass)}>
      <span className={styles.icon}></span>
      <p className={styles.currancy}>{amount.toLocaleString('en-US')}</p>
    </section>
  );
};

CurrancyDisplay.propTypes = {
  containerClass: PropTypes.string,
  amount: PropTypes.number,
};

CurrancyDisplay.defaultProps = {
  amount: 0,
};

export default CurrancyDisplay;

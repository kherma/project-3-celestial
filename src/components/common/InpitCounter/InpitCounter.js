import React from 'react';
import styles from './InpitCounter.module.scss';
import PropTypes from 'prop-types';

import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const InpitCounter = ({ reg, set, get }) => {
  const handleIncrement = () => {
    if (get('qunatity') >= 999) {
      set('qunatity', 999);
      return;
    }
    set('qunatity', get('qunatity') + 1);
  };

  const handleDecrement = () => {
    if (get('qunatity') <= 1) {
      set('qunatity', 1);
      return;
    }
    set('qunatity', get('qunatity') - 1);
  };

  return (
    <div className={styles.root}>
      <span className={styles.iconContainer} onClick={handleIncrement}>
        <FaChevronUp className={styles.icon} />
      </span>
      <input
        defaultValue={1}
        className={styles.input}
        type="number"
        {...reg('qunatity', {
          valueAsNumber: true,
          required: true,
          min: 1,
          max: 999,
        })}
      />
      <span className={styles.iconContainer}>
        <FaChevronDown className={styles.icon} onClick={handleDecrement} />
      </span>
    </div>
  );
};

InpitCounter.propTypes = {
  reg: PropTypes.func,
  set: PropTypes.func,
  get: PropTypes.func,
};

InpitCounter.defaultProps = {
  reg: () => {},
};

export default InpitCounter;

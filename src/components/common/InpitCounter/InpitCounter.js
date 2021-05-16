import React, { useState } from 'react';
import styles from './InpitCounter.module.scss';
import PropTypes from 'prop-types';

import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const InpitCounter = ({ reg, setter }) => {
  const [count, setCount] = useState(1);

  const handleChange = (value) => {
    if (count <= 1 && value === -1) {
      setCount(1);
      setter('qunatity', count);
      return;
    }

    if (count >= 999 && value === 1) {
      setCount(999);
      setter('qunatity', count);
      return;
    }
    console.log(value);
    setCount(count + value);
    setter('qunatity', count);
  };

  return (
    <div className={styles.root}>
      <span className={styles.iconContainer} onClick={() => handleChange(1)}>
        <FaChevronUp className={styles.icon} />
      </span>
      <input
        className={styles.input}
        defaultValue={count}
        type="number"
        {...reg('qunatity', {
          valueAsNumber: true,
          required: true,
          min: 1,
          max: 999,
        })}
      />
      <span className={styles.iconContainer} onClick={() => handleChange(-1)}>
        <FaChevronDown className={styles.icon} />
      </span>
    </div>
  );
};

InpitCounter.propTypes = {
  reg: PropTypes.func,
  setter: PropTypes.func,
};

InpitCounter.defaultProps = {
  reg: () => {},
};

export default InpitCounter;

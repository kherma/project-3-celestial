import React from 'react';
import styles from './InputRadioColor.module.scss';
import PropTypes from 'prop-types';

const InputRadioColor = ({ reg, value }) => {
  return (
    <label style={{ backgroundColor: value }} className={styles.root}>
      <input
        className={styles.inputHidden}
        type="radio"
        value={value}
        {...reg('color')}
      />
      <span className={styles.checkIndicator}></span>
    </label>
  );
};

InputRadioColor.propTypes = {
  color: PropTypes.string,
  value: PropTypes.string,
  reg: PropTypes.func,
};

export default InputRadioColor;

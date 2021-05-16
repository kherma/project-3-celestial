import React from 'react';
import styles from './InputRadioSize.module.scss';
import PropTypes from 'prop-types';

const InputRadioSize = ({ reg, value, checked }) => {
  return (
    <label className={styles.root}>
      <input
        className={styles.inputHidden}
        type="radio"
        defaultChecked={checked ? true : false}
        value={value}
        {...reg('size', { required: true })}
      />

      <span className={styles.checkIndicator}></span>
      <p className={styles.size}>{value}</p>
    </label>
  );
};

InputRadioSize.propTypes = {
  value: PropTypes.string,
  reg: PropTypes.func,
  checked: PropTypes.bool,
};

InputRadioSize.defaultProps = {
  reg: () => {},
};

export default InputRadioSize;

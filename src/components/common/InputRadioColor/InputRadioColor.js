import React from 'react';
import styles from './InputRadioColor.module.scss';
import PropTypes from 'prop-types';

const InputRadioColor = ({ reg, value, tshirt, checked }) => {
  const handleColorChange = () => {
    tshirt.current.style.backgroundColor = value;
  };

  return (
    <label style={{ backgroundColor: value }} className={styles.root}>
      <input
        onFocus={handleColorChange}
        className={styles.inputHidden}
        defaultChecked={checked ? true : false}
        type="radio"
        value={value}
        {...reg('color', { required: true })}
      />

      <span
        style={{ backgroundColor: value }}
        className={styles.checkIndicator}
      ></span>
    </label>
  );
};

InputRadioColor.propTypes = {
  value: PropTypes.string,
  reg: PropTypes.func,
  tshirt: PropTypes.object,
  checked: PropTypes.bool,
};

InputRadioColor.defaultProps = {
  reg: () => {},
};

export default InputRadioColor;

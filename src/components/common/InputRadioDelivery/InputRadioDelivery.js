import React from 'react';
import styles from './InputRadioDelivery.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import CurrancyDisplay from '../CurrancyDisplay/CurrancyDisplay';

const InputRadioDelivery = ({
  reg,
  className,
  value,
  text,
  price,
  addToTotal,
}) => {
  return (
    <div
      className={clsx(styles.root, className)}
      onChange={() => addToTotal(price)}
    >
      <label className={styles.label}>
        <input
          className={styles.inputHidden}
          type="radio"
          value={value}
          {...reg('color', { required: true })}
        />
        <div
          className={clsx(
            styles.content,
            value === 'premium' && styles.premium,
            value === 'regular' && styles.regular,
            value === 'economic' && styles.economic
          )}
        >
          <div className={styles.iconContainer}>
            <span className={styles.icon}></span>
          </div>
          <div className={styles.description}>
            <h5 className={styles.title}>{value}</h5>
            <p className={styles.text}>{text}</p>
          </div>
          <CurrancyDisplay amount={price} containerClass={styles.currancy} />
        </div>
      </label>
    </div>
  );
};

InputRadioDelivery.propTypes = {
  reg: PropTypes.func,
  addToTotal: PropTypes.func,
  className: PropTypes.string,
  value: PropTypes.string,
  text: PropTypes.string,
  price: PropTypes.number,
};

InputRadioDelivery.defaultProps = {
  reg: () => {},
};

export default InputRadioDelivery;

import React from 'react';
import styles from './OrderForm.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import ArticlePaper from '../../common/ArticlePaper/ArticlePaper';

const OrderForm = ({ className, reg, err }) => {
  return (
    <ArticlePaper className={clsx(styles.root, className)}>
      <div className={styles.inputGroup}>
        {err.firstName && (
          <small className={styles.message}>{err.firstName.message}</small>
        )}
        <input
          placeholder="First name"
          type="text"
          className={styles.input}
          {...reg('firstName', {
            required: {
              value: true,
              message: 'First name is required',
            },
            minLength: {
              value: 1,
              message: 'Minimum length is 1',
            },
            maxLength: {
              value: 20,
              message: 'Maximum length is 20',
            },
          })}
        />
      </div>
      <div className={styles.inputGroup}>
        {err.lastName && (
          <small className={styles.message}>{err.lastName.message}</small>
        )}
        <input
          placeholder="Last name"
          type="text"
          className={styles.input}
          {...reg('lastName', {
            required: {
              value: true,
              message: 'Last name is required',
            },
            minLength: {
              value: 1,
              message: 'Minimum length is 1',
            },
            maxLength: {
              value: 20,
              message: 'Maximum length is 20',
            },
          })}
        />
      </div>
      <div className={styles.inputGroup}>
        {err.email && (
          <small className={styles.message}>{err.email.message}</small>
        )}
        <input
          placeholder="Email"
          type="email"
          className={styles.input}
          {...reg('email', {
            required: { value: true, message: 'Email is required' },
          })}
        />
      </div>
      <div className={styles.inputGroup}>
        {err.phone && (
          <small className={styles.message}>{err.phone.message}</small>
        )}
        <input
          placeholder="Telephone"
          type="tel"
          pattern="[0-9]{9}"
          className={styles.input}
          {...reg('phone', {
            required: {
              value: true,
              message: 'Phone patter 123456789',
            },
            pattern: '[0-9]{9}',
            valueAsNumber: true,
          })}
        />
      </div>
    </ArticlePaper>
  );
};

OrderForm.propTypes = {
  className: PropTypes.string,
  reg: PropTypes.func,
  err: PropTypes.object,
};

OrderForm.defaultProps = {
  reg: () => {},
  err: {},
};

export default OrderForm;

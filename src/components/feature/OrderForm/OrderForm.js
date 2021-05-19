import React from 'react';
import styles from './OrderForm.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import ArticlePaper from '../../common/ArticlePaper/ArticlePaper';

const OrderForm = ({ className }) => {
  return (
    <ArticlePaper className={clsx(styles.root, className)}>
      <h2>OrderForm</h2>
    </ArticlePaper>
  );
};

OrderForm.propTypes = {
  className: PropTypes.string,
};

export default OrderForm;

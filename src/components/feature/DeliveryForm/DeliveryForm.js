import React from 'react';
import styles from './DeliveryForm.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import ArticlePaper from '../../common/ArticlePaper/ArticlePaper';

const DeliveryForm = ({ className, reg }) => {
  return (
    <ArticlePaper className={clsx(styles.root, className)}>
      <h2>DeliveryForm</h2>
    </ArticlePaper>
  );
};

DeliveryForm.propTypes = {
  className: PropTypes.string,
  reg: PropTypes.func,
};

export default DeliveryForm;

import React from 'react';
import styles from './DeliveryForm.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import ArticlePaper from '../../common/ArticlePaper/ArticlePaper';
import InputRadioDelivery from '../../common/InputRadioDelivery/InputRadioDeliveryContainer';

const DeliveryForm = ({ className, reg }) => {
  return (
    <ArticlePaper className={clsx(styles.root, className)}>
      <InputRadioDelivery
        reg={reg}
        value="premium"
        text="next day delivery"
        price={5}
      />
      <InputRadioDelivery
        reg={reg}
        value="regular"
        text="up to 3 days"
        price={3}
      />
      <InputRadioDelivery
        reg={reg}
        value="economic"
        text="up to 7 days"
        price={1}
      />
    </ArticlePaper>
  );
};

DeliveryForm.propTypes = {
  className: PropTypes.string,
  reg: PropTypes.func,
};

export default DeliveryForm;

import React, { useEffect } from 'react';
import styles from './OrderPage.module.scss';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import ArticlePaper from '../../common/ArticlePaper/ArticlePaper';
import CurrancyDisplay from '../../common/CurrancyDisplay/CurrancyDisplay';
import OrderForm from '../../feature/OrderForm/OrderForm';
import DeliveryForm from '../../feature/DeliveryForm/DeliveryForm';

const OrderPage = ({
  orderData: { description, loading },
  total,
  cartData,
  extrasData,
}) => {
  const history = useHistory();

  useEffect(() => {
    (!description || (!cartData.length && !extrasData.length)) &&
      history.push('/cart');
  }, [description, cartData, extrasData, history]);

  return (
    <div className={styles.root}>
      <ArticlePaper className={styles.descriptionContainer}>
        <p className={styles.description}>{description}</p>
      </ArticlePaper>
      <ArticlePaper className={styles.formContainer}>
        <form className={styles.form}>
          <OrderForm className={styles.orderForm} />
          <DeliveryForm className={styles.deliveryForm} />
          <div className={styles.submitContainer}>
            <div className={styles.currancyContainer}>
              <CurrancyDisplay
                containerClass={styles.currancy}
                amount={total}
              />
            </div>
            <button className={styles.btnSubmit} type="submit">
              submit
            </button>
          </div>
        </form>
      </ArticlePaper>
    </div>
  );
};

OrderPage.propTypes = {
  orderData: PropTypes.object,
  total: PropTypes.number,
  cartData: PropTypes.array,
  extrasData: PropTypes.array,
};

OrderPage.defaultProps = {
  orderData: {},
};

export default OrderPage;
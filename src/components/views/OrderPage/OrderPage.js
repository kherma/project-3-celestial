import React, { useEffect } from 'react';
import styles from './OrderPage.module.scss';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { useForm } from 'react-hook-form';

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleForm = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.root}>
      <ArticlePaper>
        <p className={styles.description}>{description}</p>
      </ArticlePaper>
      <form
        className={styles.form}
        onSubmit={handleSubmit((data) => handleForm(data))}
      >
        <OrderForm className={styles.orderForm} err={errors} reg={register} />
        <DeliveryForm className={styles.deliveryForm} reg={register} />
        <ArticlePaper className={styles.submitContainer} reg={register}>
          <CurrancyDisplay containerClass={styles.currancy} amount={total} />
          <button className={styles.btnSubmit} type="submit">
            submit
          </button>
        </ArticlePaper>
      </form>
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

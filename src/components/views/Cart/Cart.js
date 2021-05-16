import React from 'react';
import styles from './Cart.module.scss';
import PropTypes from 'prop-types';

import SubmitCart from '../../feature/SubmitCart/SubmitCart';
import PlanetCart from '../../feature/PlanetCart/PlanetCartContainer';
import TshirtCart from '../../feature/TshirtCart/TshirtCart';

const Cart = ({ cart }) => {
  return (
    <div className={styles.root}>
      <section className={styles.productsContainer}>
        <PlanetCart cart={cart} />
        <TshirtCart />
      </section>
      <section className={styles.submitContainer}>
        <SubmitCart />
      </section>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array,
};

export default Cart;

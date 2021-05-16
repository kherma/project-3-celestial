import React from 'react';
import styles from './Cart.module.scss';
import clsx from 'clsx';
// import PropTypes from 'prop-types';

import SubmitCart from '../../feature/SubmitCart/SubmitCart';
import PlanetCart from '../../feature/PlanetCart/PlanetCart';
import TshirtCart from '../../feature/TshirtCart/TshirtCart';

const Cart = () => {
  return (
    <div className={styles.root}>
      <section className={styles.productsContainer}>
        <PlanetCart />
        <TshirtCart />
      </section>
      <section className={styles.submitContainer}>
        <SubmitCart />
      </section>
    </div>
  );
};

// Cart.propTypes = {};

export default Cart;

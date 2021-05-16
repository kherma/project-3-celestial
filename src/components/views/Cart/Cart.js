import React from 'react';
import styles from './Cart.module.scss';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import SubmitCart from '../../feature/SubmitCart/SubmitCart';
import PlanetCart from '../../feature/PlanetCart/PlanetCartContainer';
import TshirtCart from '../../feature/TshirtCart/TshirtCart';
import ArticlePaper from '../../common/ArticlePaper/ArticlePaper';

const Cart = ({ cart, extras }) => {
  if (cart.length || extras.length) {
    return (
      <div className={styles.root}>
        <section className={styles.productsContainer}>
          {Boolean(cart.length) && <PlanetCart cart={cart} />}
          {Boolean(extras.length) && <TshirtCart />}
        </section>
        <section className={styles.submitContainer}>
          <SubmitCart />
        </section>
      </div>
    );
  }

  if (!cart.length && !extras.length) {
    return (
      <div className={styles.root}>
        <ArticlePaper className={styles.titleContainer}>
          <h2 className={styles.title}>Your cart is empty</h2>

          <Link to="/explore" className={styles.link}>
            Go back to explore
          </Link>
        </ArticlePaper>
      </div>
    );
  }
};

Cart.propTypes = {
  cart: PropTypes.array,
  extras: PropTypes.array,
};

Cart.defaultProps = {
  cart: [],
  extras: [],
};

export default Cart;

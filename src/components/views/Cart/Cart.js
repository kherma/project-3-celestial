import React from 'react';
import styles from './Cart.module.scss';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import SubmitCart from '../../feature/SubmitCart/SubmitCartContainer';
import PlanetCart from '../../feature/PlanetCart/PlanetCartContainer';
import TshirtCart from '../../feature/TshirtCart/TshirtCartContainer';
import ArticlePaper from '../../common/ArticlePaper/ArticlePaper';

const Cart = ({ cart, extras }) => {
  if (cart.length || extras.length) {
    return (
      <div className={styles.root}>
        <section className={styles.productsContainer}>
          {Boolean(cart.length) && <PlanetCart cart={cart} />}
          {Boolean(extras.length) && (
            <ArticlePaper>
              <>
                {extras.map((item) => (
                  <TshirtCart key={uuidv4()} extras={item} />
                ))}
              </>
            </ArticlePaper>
          )}
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

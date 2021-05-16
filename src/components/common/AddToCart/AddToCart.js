import React from 'react';
import styles from './AddToCart.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { MdShoppingCart, MdRemoveShoppingCart } from 'react-icons/md';

const AddToCart = ({
  cart,
  limit,
  add,
  remove,
  id,
  modalToggler,
  price,
  planetStyles,
}) => {
  const planetObject = { id, planetStyles, price };
  if (!cart.some((item) => item.id === planetObject.id)) {
    return (
      <button
        className={clsx(styles.btn, styles.btnAdd)}
        onClick={() => {
          add(planetObject);
          if (cart.length === limit)
            modalToggler({
              show: true,
              message: `due to the inter-everything law maximum cart capacity is ${limit}`,
            });
        }}
      >
        <MdShoppingCart className={styles.icon} />
      </button>
    );
  }

  if (cart.some((item) => item.id === planetObject.id)) {
    return (
      <button
        className={clsx(styles.btn, styles.btnRemove)}
        onClick={() => remove(planetObject)}
      >
        <MdRemoveShoppingCart className={styles.icon} />
      </button>
    );
  }
};

AddToCart.propTypes = {
  cart: PropTypes.array,
  add: PropTypes.func,
  remove: PropTypes.func,
  id: PropTypes.string,
  modalToggler: PropTypes.func,
  limit: PropTypes.number,
  price: PropTypes.number,
  planetStyles: PropTypes.object,
};

AddToCart.defaultProps = {
  cart: [],
};

export default AddToCart;

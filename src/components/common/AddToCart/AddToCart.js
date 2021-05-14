import React from 'react';
import styles from './AddToCart.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { MdShoppingCart, MdRemoveShoppingCart } from 'react-icons/md';

const AddToCart = ({ cart, add, remove, id, modalToggler }) => {
  if (!cart.includes(id)) {
    return (
      <button
        className={clsx(styles.btn, styles.btnAdd)}
        onClick={() => {
          add(id);
          if (cart.length === 10)
            modalToggler({
              show: true,
              message:
                'due to the inter-everything law maximum cart capacity is 10',
            });
        }}
      >
        <MdShoppingCart className={styles.icon} />
      </button>
    );
  }

  if (cart.includes(id)) {
    return (
      <button
        className={clsx(styles.btn, styles.btnRemove)}
        onClick={() => remove(id)}
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
};

AddToCart.defaultProps = {
  cart: [],
};

export default AddToCart;

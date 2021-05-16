import React from 'react';
import styles from './SubmitCart.module.scss';
// import PropTypes from 'prop-types';

import ArticlePaper from '../../common/ArticlePaper/ArticlePaper';
import CurrancyDisplay from '../../common/CurrancyDisplay/CurrancyDisplay';

const SubmitCart = () => {
  return (
    <ArticlePaper className={styles.root}>
      <CurrancyDisplay containerClass={styles.currancy} amount={0} />
      <button className={styles.btnCheckout}>checkout</button>
    </ArticlePaper>
  );
};

// SubmitCart.propTypes = {
// };

export default SubmitCart;

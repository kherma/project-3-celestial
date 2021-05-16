import React from 'react';
import styles from './TshirtCart.module.scss';
// import PropTypes from 'prop-types';

import ArticlePaper from '../../common/ArticlePaper/ArticlePaper';
import CurrancyDisplay from '../../common/CurrancyDisplay/CurrancyDisplay';
import PlanetView from '../../common/PlanetView/PlanetView';

const TshirtCart = () => {
  return (
    <ArticlePaper className={styles.root}>
      <h2>TshirtCart</h2>
    </ArticlePaper>
  );
};

// TshirtCart.propTypes = {
// };

export default TshirtCart;

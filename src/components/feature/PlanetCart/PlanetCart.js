import React from 'react';
import styles from './PlanetCart.module.scss';
// import PropTypes from 'prop-types';

import ArticlePaper from '../../common/ArticlePaper/ArticlePaper';
import CurrancyDisplay from '../../common/CurrancyDisplay/CurrancyDisplay';
import PlanetView from '../../common/PlanetView/PlanetView';

const PlanetCart = () => {
  return (
    <ArticlePaper className={styles.root}>
      <h2>PlanetCart</h2>
    </ArticlePaper>
  );
};

// PlanetCart.propTypes = {
// };

export default PlanetCart;

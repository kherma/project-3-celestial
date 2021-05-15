import React from 'react';
import styles from './PlanetProductAtmosphere.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import ArticlePaper from '../ArticlePaper/ArticlePaper';

const PlanetProductAtmosphere = ({ className, atmosphere }) => {
  return (
    <ArticlePaper className={clsx(styles.root, className)}>
      <h2>PlanetProductAtmosphere</h2>
    </ArticlePaper>
  );
};

PlanetProductAtmosphere.propTypes = {
  className: PropTypes.string,
  atmosphere: PropTypes.array,
};

export default PlanetProductAtmosphere;

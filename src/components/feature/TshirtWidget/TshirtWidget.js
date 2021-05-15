import React from 'react';
import styles from './TshirtWidget.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import ArticlePaper from '../../common/ArticlePaper/ArticlePaper';
import CurrancyDisplay from '../../common/CurrancyDisplay/CurrancyDisplay';
import PlanetView from '../../common/PlanetView/PlanetView';

const TshirtWidget = ({ className, planetStyles, id }) => {
  return (
    <ArticlePaper className={clsx(styles.root, className)}>
      <h2>TshirtWidget</h2>
    </ArticlePaper>
  );
};

TshirtWidget.propTypes = {
  className: PropTypes.string,
  planetStyles: PropTypes.object,
  id: PropTypes.string,
};

export default TshirtWidget;

import React, { useRef } from 'react';
import styles from './TshirtWidget.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import ArticlePaper from '../../common/ArticlePaper/ArticlePaper';
import CurrancyDisplay from '../../common/CurrancyDisplay/CurrancyDisplay';
import PlanetView from '../../common/PlanetView/PlanetView';
import TshirtForm from '../TshirtForm/TshirtForm';

const TshirtWidget = ({ className, planetStyles, id }) => {
  const tshirt = useRef();

  return (
    <ArticlePaper className={clsx(styles.root, className)}>
      <div className={styles.tshirtContainer}>
        <span ref={tshirt} className={styles.tshirt}></span>
        <div className={styles.planetContainer}>
          <PlanetView {...planetStyles} className={styles.planet} />
        </div>
        <div className={styles.CurrancyContainer}>
          <CurrancyDisplay amount={1} containerClass={styles.currancy} />
        </div>
      </div>
      <TshirtForm className={styles.formContainer} tshirt={tshirt} />
    </ArticlePaper>
  );
};

TshirtWidget.propTypes = {
  className: PropTypes.string,
  planetStyles: PropTypes.object,
  id: PropTypes.string,
};

TshirtWidget.defaultProps = {
  planetStyles: {},
  id: '',
};

export default TshirtWidget;

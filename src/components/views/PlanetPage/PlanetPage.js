import React, { useEffect } from 'react';
import styles from './PlanetPage.module.scss';
import PropTypes from 'prop-types';

import Visualization from '../../common/PlanetProductViz/PlanetProductViz';
import Atmosphere from '../../common/PlanetProductAtmosphere/PlanetProductAtmosphere';
import Distance from '../../common/PlanetProductDistance/PlanetProductDistance';
import Data from '../../common/PlanetProductData/PlanetProductData';
import TshirtWidget from '../../feature/TshirtWidget/TshirtWidget';
import ArticlePaper from '../../common/ArticlePaper/ArticlePaper';

const PlanetPage = ({
  location: { state },
  data: { _id, data, styles: planetStyles },
  fetchData,
}) => {
  useEffect(() => {
    fetchData(state);
  }, [state, fetchData]);

  return (
    <div className={styles.root}>
      <Visualization
        className={styles.visualization}
        planetStyles={planetStyles}
        {...data}
        id={_id}
      />
      <TshirtWidget
        className={styles.widget}
        planetStyles={planetStyles}
        {...data}
      />
      <ArticlePaper className={styles.descriptionContainer}>
        <p className={styles.description}>{data && data.description}</p>
      </ArticlePaper>
      <Data {...data} className={styles.data} />
      <Distance className={styles.distance} {...data} />
      <Atmosphere className={styles.atmosphere} {...data} />
    </div>
  );
};

PlanetPage.propTypes = {
  location: PropTypes.object,
  data: PropTypes.object,
  fetchData: PropTypes.func,
  _id: PropTypes.string,
};

PlanetPage.defaultProps = {
  location: {},
  data: { data: {}, styles: {} },
};

export default PlanetPage;

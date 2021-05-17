import React, { useEffect } from 'react';
import styles from './PlanetPage.module.scss';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import Visualization from '../../common/PlanetProductViz/PlanetProductViz';
import Atmosphere from '../../common/PlanetProductAtmosphere/PlanetProductAtmosphere';
import Distance from '../../common/PlanetProductDistance/PlanetProductDistance';
import Data from '../../common/PlanetProductData/PlanetProductData';
import TshirtWidget from '../../feature/TshirtWidget/TshirtWidgetContainer';
import ArticlePaper from '../../common/ArticlePaper/ArticlePaper';

const PlanetPage = ({
  location: { state },
  data: { _id, data, styles: planetStyles },
  fetchData,
  loading,
}) => {
  useEffect(() => {
    fetchData(state);
  }, [state, fetchData]);

  return (
    <div className={styles.root}>
      {loading.error && <Redirect to="/not-found" />}
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
        id={_id}
      />
      <ArticlePaper className={styles.descriptionContainer}>
        <p className={styles.description}>{data && data.description}</p>
      </ArticlePaper>
      <Data {...data} className={styles.data} />
      <Distance
        className={styles.distance}
        {...data}
        planetStyles={planetStyles}
      />
      <Atmosphere className={styles.atmosphere} {...data} />
    </div>
  );
};

PlanetPage.propTypes = {
  location: PropTypes.object,
  data: PropTypes.object,
  fetchData: PropTypes.func,
  _id: PropTypes.string,
  loading: PropTypes.object,
};

PlanetPage.defaultProps = {
  location: {},
  data: { data: {}, styles: {} },
  loading: { error: false },
};

export default PlanetPage;

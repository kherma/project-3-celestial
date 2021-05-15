import React from 'react';
import styles from './Discover.module.scss';
import PropTypes from 'prop-types';

import PlanetView from '../../common/PlanetView/PlanetView';
import PlanetData from '../../common/PlanetData/PlanetData';
import PlanetAtmosphere from '../../common/PlanetAtmosphere/PlanetAtmosphere';

import ArticlePaper from '../../common/ArticlePaper/ArticlePaper';

const Discover = ({ data: { data, styles: planetStyles }, fetchData }) => {
  return (
    <section className={styles.root}>
      <ArticlePaper className={styles.headerInfo}>
        <p className={styles.info}>
          Hello great explorer. Help us find new planets and you will be
          rewarded. We are currently looking for inhabited planets, they are
          very rare. If you find one, you will get 5% of its value.
        </p>
        <button
          className={styles.btn}
          onClick={() => {
            fetchData();
          }}
        >
          new
        </button>
      </ArticlePaper>
      <ArticlePaper className={styles.headerForm}>
        <form className={styles.form}>
          <textarea
            placeholder="Why do you think this planet is valuable?"
            className={styles.input}
          ></textarea>
          <button className={styles.btn}>submit</button>
        </form>
      </ArticlePaper>
      <ArticlePaper className={styles.planetContainer}>
        {data ? (
          <PlanetView {...planetStyles} className={styles.responsive} />
        ) : (
          <h2 className={styles.filler}>...</h2>
        )}
      </ArticlePaper>
      <ArticlePaper className={styles.dataContainer}>
        {data ? (
          <PlanetData {...data} />
        ) : (
          <h2 className={styles.filler}>...</h2>
        )}
      </ArticlePaper>
      <ArticlePaper className={styles.atmosphereContainer}>
        {data ? (
          <PlanetAtmosphere {...data} />
        ) : (
          <h2 className={styles.filler}>...</h2>
        )}
      </ArticlePaper>
      <ArticlePaper className={styles.descriptionContainer}>
        {data ? (
          <p className={styles.text}>{data.description}</p>
        ) : (
          <h2 className={styles.filler}>...</h2>
        )}
      </ArticlePaper>
    </section>
  );
};

Discover.propTypes = {
  fetchData: PropTypes.func,
  data: PropTypes.object,
};

Discover.defaultProps = {
  data: {},
};

export default Discover;

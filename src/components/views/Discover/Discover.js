import React, { useState } from 'react';
import styles from './Discover.module.scss';
import Planet from '../../../utils/seed';

import PlanetView from '../../common/PlanetView/PlanetView';
import PlanetData from '../../common/PlanetData/PlanetData';
import PlanetAtmosphere from '../../common/PlanetAtmosphere/PlanetAtmosphere';

import ArticlePaper from '../../common/ArticlePaper/ArticlePaper';

const Discover = () => {
  const [planetData, setPlanetData] = useState({});

  const generateNew = () => {
    const planet = new Planet();
    planet.generatePlanet();
    setPlanetData(planet);
  };

  return (
    <section className={styles.root}>
      <ArticlePaper className={styles.headerInfo}>
        <p className={styles.info}>
          Hello great explorer. Help us find new planets and you will be
          rewarded. We are currently looking for inhabited planets, they are
          very rare. If you find one, you will get 5% of its value.
        </p>
        <button className={styles.btn} onClick={generateNew}>
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
        <PlanetView />
      </ArticlePaper>
      <ArticlePaper className={styles.dataContainer}>
        <PlanetData />
      </ArticlePaper>
      <ArticlePaper className={styles.atmosphereContainer}>
        <PlanetAtmosphere />
      </ArticlePaper>
      <ArticlePaper className={styles.descriptionContainer}>
        <p>{planetData.data ? planetData.data.description : '...'}</p>
      </ArticlePaper>
    </section>
  );
};

export default Discover;

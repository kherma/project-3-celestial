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
    // for (let i = 0; i < 10000; i++) {
    //   const planet = new Planet();
    //   planet.generatePlanet();
    //   if (planet.data.population > 6900) {
    //     setPlanetData(planet);
    //     return;
    //   }
    // }
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
        <PlanetView {...planetData.styles} />
      </ArticlePaper>
      <ArticlePaper className={styles.dataContainer}>
        <PlanetData {...planetData.data} />
      </ArticlePaper>
      <ArticlePaper className={styles.atmosphereContainer}>
        <PlanetAtmosphere {...planetData.data} />
      </ArticlePaper>
      <ArticlePaper className={styles.descriptionContainer}>
        {planetData.data ? (
          <p>{planetData.data.description}</p>
        ) : (
          <h2 className={styles.filler}>...</h2>
        )}
      </ArticlePaper>
    </section>
  );
};

export default Discover;

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
    for (let i = 1; i < 10000; i++) {
      const planet = new Planet();
      planet.generatePlanet();
      if (planet.data.population) {
        setPlanetData(planet);
        const postPlanet = {
          data: {
            ...planet.data,
            numberSize: planet.settings.numberSize,
          },
          styles: {
            ...planet.styles,
          },
        };
        console.log(postPlanet);

        return;
      }
    }
  };

  // const array = [
  //   {
  //     data: {
  //       atmosphere: [
  //         'troposphere',
  //         'stratosphere',
  //         'mesosphere',
  //         'thermosphere',
  //         'exosphere',
  //       ],
  //       description:
  //         'DVVBPY-063-s is a large planet. It is located 117 milion miles from its star. The average temperature is 24 degrees Celsius and because of that it has great potential for resource extraction. The atmosphere has 5 layers so and there is a lot of oxygen in it. Finally the planet is inhabited by 5112 M of unexplored creatures.',
  //       distanceFromSun: 117,
  //       name: 'DVVBPY-063-s',
  //       numberSize: 72,
  //       ozoneLayer: true,
  //       population: 5112,
  //       price: 2811,
  //       size: 'large',
  //       temperature: 24,
  //     },
  //     styles: {
  //       planet: {
  //         background: 'radial-gradient(#F2E641, #6DF2C1, #F2637E, #D93280)',
  //         boxShadow:
  //           'inset -2.5rem -1.5rem 1rem rgba(0,0,0,0.2), 0 0 0 0.4rem #20b8cd, 0 0 0 0.8rem #64def9, 0 0 0 1.2rem #00a4bb, 0 0 0 1.6rem #017397, 0 0 0 2.4rem #013d62, 0 0 0 4.0rem #171129',
  //         transform: 'scale(0.72)',
  //       },
  //       rings: {
  //         borderBottom: '1.5rem double #F2C53D',
  //         borderLeft: '1.5rem double #F2C53D',
  //         borderRight: '1.5rem double #F2C53D',
  //         borderTop: '0.1rem solid transparent',
  //         show: true,
  //         transform: 'translate(-50%, -50%) scale(0.72)',
  //       },
  //     },
  //   },
  //   {
  //     data: {
  //       atmosphere: [
  //         'troposphere',
  //         'stratosphere',
  //         'mesosphere',
  //         'thermosphere',
  //         'exosphere',
  //       ],
  //       description:
  //         'LVYNTX-539-y is a medium planet. It is located 119 milion miles from its star. The average temperature is 27 degrees Celsius and because of that it has great potential for resource extraction. The atmosphere has 5 layers so and there is a lot of oxygen in it. Finally the planet is inhabited by 3490 M of unexplored creatures.',
  //       distanceFromSun: 119,
  //       name: 'LVYNTX-539-y',
  //       numberSize: 60,
  //       ozoneLayer: true,
  //       population: 3490,
  //       price: 2445,
  //       size: 'medium',
  //       temperature: 27,
  //     },
  //     styles: {
  //       planet: {
  //         background: 'radial-gradient(#F2E416, #636AF2, #60A61B)',
  //         boxShadow:
  //           'inset -2.5rem -1.5rem 1rem rgba(0,0,0,0.2), 0 0 0 0.4rem #20b8cd, 0 0 0 0.8rem #64def9, 0 0 0 1.2rem #00a4bb, 0 0 0 1.6rem #017397, 0 0 0 2.4rem #013d62, 0 0 0 4.0rem #171129',
  //         transform: 'scale(0.60)',
  //       },
  //       rings: {
  //         borderBottom: '1.5rem solid #601F8C',
  //         borderLeft: '1.5rem solid #601F8C',
  //         borderRight: '1.5rem solid #601F8C',
  //         borderTop: '0.1rem solid transparent',
  //         show: true,
  //         transform: 'translate(-50%, -50%) scale(0.60)',
  //       },
  //     },
  //   },
  // ];

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
        {planetData.data ? (
          <PlanetView {...planetData.styles} className={styles.responsive} />
        ) : (
          <h2 className={styles.filler}>...</h2>
        )}
      </ArticlePaper>
      <ArticlePaper className={styles.dataContainer}>
        {planetData.data ? (
          <PlanetData {...planetData.data} />
        ) : (
          <h2 className={styles.filler}>...</h2>
        )}
      </ArticlePaper>
      <ArticlePaper className={styles.atmosphereContainer}>
        {planetData.data ? (
          <PlanetAtmosphere {...planetData.data} />
        ) : (
          <h2 className={styles.filler}>...</h2>
        )}
      </ArticlePaper>
      <ArticlePaper className={styles.descriptionContainer}>
        {planetData.data ? (
          <p className={styles.text}>{planetData.data.description}</p>
        ) : (
          <h2 className={styles.filler}>...</h2>
        )}
      </ArticlePaper>
    </section>
  );
};

export default Discover;

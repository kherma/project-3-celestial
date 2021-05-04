import React from 'react';
import styles from './Discover.module.scss';

import PlanetView from '../../common/PlanetView/PlanetView';
import PlanetData from '../../common/PlanetData/PlanetData';
import PlanetAtmosphere from '../../common/PlanetAtmosphere/PlanetAtmosphere';

import ArticlePaper from '../../common/ArticlePaper/ArticlePaper';

const Discover = () => {
  return (
    <section className={styles.root}>
      <div className={styles.controllers}>
        <button className={styles.btn}>new</button>
        <button className={styles.btn}>submit</button>
      </div>
      <div className={styles.planetInfo}>
        <ArticlePaper className={styles.planetContainer}>
          <PlanetView />
        </ArticlePaper>
        <ArticlePaper className={styles.dataContainer}>
          <PlanetData />
        </ArticlePaper>
        <ArticlePaper className={styles.atmosphereContainer}>
          <PlanetAtmosphere />
        </ArticlePaper>
      </div>
      <div className={styles.planetDescription}>
        <ArticlePaper>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            eget blandit enim. Nulla facilisi. Pellentesque sed porttitor justo.
            Praesent pulvinar aliquam mi, eu congue purus tempor a. Ut at risus
            vitae dui mollis placerat. Fusce placerat mauris id posuere gravida.
            Donec consequat viverra sem at placerat. Praesent vitae velit
            pellentesque, porttitor magna sed, laoreet ante. In ligula velit,
            tincidunt vitae libero eget, tincidunt efficitur purus. Proin justo
            mauris, luctus eu sollicitudin eu, tempus a justo. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Nulla a pulvinar tortor, quis
            vestibulum metus.
          </p>
        </ArticlePaper>
      </div>
    </section>
  );
};

export default Discover;

import React, { useRef } from 'react';
import styles from './Explore.module.scss';
import PropTypes from 'prop-types';

import ArticlePaper from '../../common/ArticlePaper/ArticlePaper';
import Pagination from '../../common/PaginationContainer/PaginationContainerContainer';
import PlanetItem from '../../common/PlanetListItem/PlanetListItem';
import Modal from '../../feature/ModalBox/ModalBoxContainer';

const Explore = ({ results, modal: { show } }) => {
  const scrollable = useRef();

  return (
    <div className={styles.root}>
      <div className={styles.gridContainer} ref={scrollable}>
        {show && <Modal />}
        <ArticlePaper>
          <div className={styles.pagination}>
            <Pagination container={scrollable} />
          </div>
        </ArticlePaper>

        <div className={styles.resultsContainer}>
          {results.map((data) => (
            <ArticlePaper key={data.id}>
              <PlanetItem data={data} />
            </ArticlePaper>
          ))}
        </div>
        <ArticlePaper>
          <div className={styles.pagination}>
            <Pagination container={scrollable} />
          </div>
        </ArticlePaper>
      </div>
    </div>
  );
};

Explore.propTypes = {
  results: PropTypes.array,
  modal: PropTypes.object,
};

Explore.defaultProps = {
  results: [],
  modal: {},
};

export default Explore;

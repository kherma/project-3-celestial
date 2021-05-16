import React from 'react';
import styles from './DropdownMenu.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { FaTrash } from 'react-icons/fa';

import PlanetView from '../../common/PlanetView/PlanetView';
import CurrancyDisplay from '../../common/CurrancyDisplay/CurrancyDisplay';
import ArticlePaper from '../../common/ArticlePaper/ArticlePaper';

const DropdownMenu = ({ planets, remove }) => {
  return (
    <div className={styles.root}>
      <ul className={styles.list}>
        {planets.map(({ id, newStyles, price }) => (
          <li className={styles.listItem} key={id}>
            <ArticlePaper className={styles.paper}>
              <Link
                to={{
                  pathname: `/planet/${id}`,
                  state: id,
                }}
                className={styles.link}
              >
                <PlanetView {...newStyles} className={styles.planet} />
              </Link>
              <CurrancyDisplay
                containerClass={styles.currancyTag}
                amount={price}
              />
              <button
                className={styles.btnTrash}
                onClick={() => remove({ id })}
              >
                <FaTrash className={styles.trashIcon} />
              </button>
            </ArticlePaper>
          </li>
        ))}
      </ul>
    </div>
  );
};

DropdownMenu.propTypes = {
  planets: PropTypes.array,
  remove: PropTypes.func,
};

DropdownMenu.defaultProps = {
  planets: [],
};

export default DropdownMenu;

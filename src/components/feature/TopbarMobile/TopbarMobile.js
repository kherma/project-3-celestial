import React, { useState } from 'react';
import styles from './TopbarMobile.module.scss';
import PropTypes from 'prop-types';

import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

import CurrancyDisplay from '../../common/CurrancyDisplay/CurrancyDisplay';
import Dropdown from '../DropdownMenu/DropdownMenu';

const TopbarMobile = ({ total, planets, remove }) => {
  const [isToggled, setIsToggeld] = useState(false);
  return (
    <section className={styles.root}>
      <CurrancyDisplay containerClass={styles.currancyTag} amount={total} />
      <button
        className={styles.btnToggle}
        onClick={() => setIsToggeld(!isToggled)}
      >
        {isToggled ? (
          <FaChevronUp className={styles.icon} />
        ) : (
          <FaChevronDown className={styles.icon} />
        )}
      </button>
      {isToggled && <Dropdown planets={planets} remove={remove} />}
    </section>
  );
};

TopbarMobile.propTypes = {
  total: PropTypes.any,
  planets: PropTypes.array,
  remove: PropTypes.func,
};

TopbarMobile.defaultProps = {
  planets: [],
};

export default TopbarMobile;

import React, { useRef, useState } from 'react';
import styles from './TshirtWidget.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import ArticlePaper from '../../common/ArticlePaper/ArticlePaper';
import CurrancyDisplay from '../../common/CurrancyDisplay/CurrancyDisplay';
import TshirtForm from '../TshirtForm/TshirtFormContainer';
import TshirtView from '../../common/TshirtView/TshirtView';

const TshirtWidget = ({ className, planetStyles, id }) => {
  const tshirt = useRef();

  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <ArticlePaper className={clsx(styles.root, className)}>
      <button
        className={clsx(styles.tshirtContainer, show && styles.show)}
        onClick={toggleShow}
      >
        <TshirtView tshirt={tshirt} planetStyles={planetStyles} size="large" />
        <div className={styles.CurrancyContainer}>
          <CurrancyDisplay amount={1} containerClass={styles.currancy} />
        </div>
      </button>
      <TshirtForm
        className={clsx(styles.formContainer, show && styles.formShow)}
        tshirt={tshirt}
        id={id}
        planetStyles={planetStyles}
      />
    </ArticlePaper>
  );
};

TshirtWidget.propTypes = {
  className: PropTypes.string,
  planetStyles: PropTypes.object,
  id: PropTypes.string,
};

TshirtWidget.defaultProps = {
  planetStyles: {},
  id: '',
};

export default TshirtWidget;

import React from 'react';
import styles from './ModalBox.module.scss';
import PropTypes from 'prop-types';

import { IoClose } from 'react-icons/io5';

import ArticlePaper from '../../common/ArticlePaper/ArticlePaper';

const ModalBox = ({ data: { message }, toggler }) => {
  return (
    <ArticlePaper className={styles.root}>
      <p className={styles.text}>{message}</p>
      <button
        className={styles.btnClose}
        onClick={() =>
          toggler({
            show: false,
            message: '',
          })
        }
      >
        <IoClose className={styles.icon} />
      </button>
    </ArticlePaper>
  );
};

ModalBox.propTypes = {
  data: PropTypes.object,
  toggler: PropTypes.func,
};

ModalBox.defaultProps = {
  data: {},
};

export default ModalBox;

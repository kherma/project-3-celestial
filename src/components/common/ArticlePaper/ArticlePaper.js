import React from 'react';
import styles from './ArticlePaper.module.scss';
import PropTypes from 'prop-types';

import clsx from 'clsx';

const ArticlePaper = ({ children, className }) => {
  return <article className={clsx(styles.root, className)}>{children}</article>;
};

ArticlePaper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default ArticlePaper;

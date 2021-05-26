import React, { useRef } from 'react';
import styles from './PersonaWidget.module.scss';
// import PropTypes from 'prop-types';

import PersonaView from '../../common/PersonaView/PersonaView';
import PersonaForm from '../PersonaForm/PersonaForm';
import ArticlePaper from '../../common/ArticlePaper/ArticlePaper';

const PersonaWidget = () => {
  const gender = useRef();
  return (
    <div className={styles.root}>
      <ArticlePaper className={styles.personaView}>
        <PersonaView gender={gender} />
      </ArticlePaper>
      <ArticlePaper className={styles.personaForm}>
        <PersonaForm gender={gender} />
      </ArticlePaper>
    </div>
  );
};

// PersonaWidget.propTypes = {
// };

export default PersonaWidget;

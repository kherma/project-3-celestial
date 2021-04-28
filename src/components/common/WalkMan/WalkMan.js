import React from 'react';
import styles from './WalkMan.module.scss';
import useSound from 'use-sound';
import sounds from '../../../resources/hello.mp3';

const WalkMan = () => {
  const [play, { stop }] = useSound(sounds, {
    volume: 0.5,
    interrupt: false,
  });

  const stopSound = () => {
    stop();
  };

  const playSound = () => {
    play();
  };

  return (
    <div className={styles.root}>
      <div className={styles.walkMan}>
        <span className={styles.switch}></span>
        <div className={styles.controllers}>
          <button onClick={stopSound}></button>
          <button onClick={playSound}></button>
        </div>
      </div>
    </div>
  );
};

export default WalkMan;

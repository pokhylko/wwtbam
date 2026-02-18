import { FC } from 'react';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { startGame } from '@/components/Game/GameSlice';

import styles from './Start.module.scss';

import like from '@/images/like.svg';

export const Start: FC = () => {
  const dispatch = useAppDispatch();

  const { gameStatus, score } = useAppSelector((state) => state.game);

  const onStartGame = () => {
    dispatch(startGame());
  };

  return (
    <div className={`${styles.Start} ${styles.Start___bg}`}>
      <div className={styles.Start_wrapper}>
        <img className={styles.Start_logo} src={like} alt="like" />

        <div className={styles.Start_content}>
          {gameStatus === 'not started' && (
            <h1 className={styles.Start_title}>Who wants to be a millionaire?</h1>
          )}

          {gameStatus === 'finished' && (
            <div>
              <h2 className={styles.Start_scoreTitle}>Total score:</h2>
              <h3 className={styles.Start_title}>{`$${score.toLocaleString()} earned`}</h3>
            </div>
          )}

          <button
            className={styles.Start_button}
            type="button"
            onClick={onStartGame}
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

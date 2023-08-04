import { FC } from 'react';

import cn from 'classnames';

import { useAppDispatch, useAppSelector } from 'src/store/hooks';

import { startedGame } from '../Game/GameSlice';

import styles from './Start.module.scss';

import like from '../../images/like.svg';

export const Start: FC = () => {
  const dispatch = useAppDispatch();

  const { gameStatus, score } = useAppSelector((state) => state.game);

  const onStartGame = () => {
    dispatch(startedGame());
  };

  return (
    <div className={cn(
      styles.Start,
      { [styles.Start___bg]: gameStatus !== 'started' },
    )}
    >
      <div className={styles.Start_wrapper}>
        <img className={styles.Start_logo} src={like} alt="like" />

        <div className={styles.Start_content}>
          {gameStatus === 'not started' && (
            <h1 className={styles.Start_title}>Who wants to be a millionaire?</h1>
          )}

          {gameStatus === 'finished' && (
            <div className={styles.Start_score}>
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

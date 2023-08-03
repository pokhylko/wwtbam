import { FC } from 'react';

import cn from 'classnames';

import './Start.scss';

import { useAppDispatch, useAppSelector } from 'src/store/hooks';
import { startedGame } from '../Game/GameSlice';

import like from '../../images/like.svg';

export const Start: FC = () => {
  const dispatch = useAppDispatch();

  const { gameStatus, score } = useAppSelector((state) => state.game);

  const onStartGame = () => {
    dispatch(startedGame());
  };

  return (
    <div className={cn(
      'start',
      { 'start--bg': gameStatus !== 'started' },
    )}
    >
      <div className="start__wrapper">
        <img className="start__logo" src={like} alt="like" />

        <div className="start__content">
          {gameStatus === 'not started' && (
            <h1 className="start__title">Who wants to be a millionaire?</h1>
          )}

          {gameStatus === 'finished' && (
            <div className="start__score">
              <h2 className="start__score-title">Total score:</h2>
              <h3 className="start__title">{`$${score.toLocaleString()} earned`}</h3>
            </div>
          )}

          <button
            className="start__button"
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

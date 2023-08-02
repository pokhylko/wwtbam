import {
  Dispatch, FC, SetStateAction, useCallback,
} from 'react';

import cn from 'classnames';

import './Start.scss';

import like from '../../images/like.svg';

type Props = {
  isGameOver: boolean;
  score: number;
  setIsGameStart: Dispatch<SetStateAction<boolean>>;
};

export const Start: FC<Props> = ({ isGameOver, score, setIsGameStart }) => {
  const startGame = useCallback(() => {
    setIsGameStart(true);
  }, [setIsGameStart]);

  return (
    <div className={cn(
      'start',
      { 'start--bg': !isGameOver },
    )}
    >
      <div className="start__wrapper">
        <img className="start__logo" src={like} alt="like" />

        <div className="start__content">
          {!isGameOver ? (
            <h1 className="start__title">Who wants to be a millionaire?</h1>
          ) : (
            <div className="start__score">
              <h2 className="start__score-title">Total score:</h2>
              <h3 className="start__title">{`$${score.toLocaleString()} earned`}</h3>
            </div>
          )}

          <button
            className="start__button"
            type="button"
            onClick={startGame}
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

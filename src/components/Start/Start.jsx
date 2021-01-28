import React, { useCallback } from 'react';

import PropTypes from 'prop-types';
import cn from 'classnames';

import './Start.scss';

import like from '../../images/like.svg';

export const Start = ({ setGameStart, gameOver, score }) => {
  const startGame = useCallback(() => {
    setGameStart(true);
  }, []);

  return (
    <div className={cn(
      'start',
      { 'start--bg': !gameOver },
    )}
    >
      <div className="start__wrapper">
        <img className="start__logo" src={like} alt="like" />

        <div className="start__content">
          {!gameOver ? (
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

Start.propTypes = {
  setGameStart: PropTypes.func.isRequired,
  gameOver: PropTypes.bool.isRequired,
  score: PropTypes.number.isRequired,
};

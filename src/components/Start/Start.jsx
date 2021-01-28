import React from 'react';

import PropTypes from 'prop-types';
import cn from 'classnames';

import './Start.scss';

import like from '../../images/like.svg';

export const Start = ({ setGameStart, gameOver, score }) => {
  const startGame = () => {
    setGameStart(true);
  };

  return (
    <div className={cn(
      'game-start',
      { 'game-start_bg': !gameOver },
    )}
    >
      <div className="game-start__wrapper">
        <img className="game-start__logo" src={like} alt="like" />

        <div className="game-start__content">
          {!gameOver ? (
            <h1 className="game-start__title">Who wants to be a millionaire?</h1>
          ) : (
            <div className="game-start__score">
              <h3 className="game-start__score-title">Total score:</h3>
              <h2 className="game-start__title">{`$${score.toLocaleString()} earned`}</h2>
            </div>
          )}

          <button
            className="game-start__button"
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

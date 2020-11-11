import React from 'react';
import './Start.scss';
import classNames from 'classnames';
import like from '../../images/like.svg';

export const Start = ({ setGameStart, gameOver, score }) => {
  const startGame = () => {
    setGameStart(true);
  }

  return (
    <div className={classNames( 
        'game-start', 
        { 'game-start_bg': !gameOver }
      )}
    >
      <div className="game-start__wrapper">
        <img className="game-start__logo" src={like} alt="like"/>

        <div className="game-start__content">
          {!gameOver ? (
            <h1 className="game-start__title">Who wants to be a millionaire?</h1>
          ) : (
            <>
              <h3 className="game-start__score-title">Total score:</h3>
              <h2 className="game-start__title">{`$${score.toLocaleString()} earned`}</h2>
            </>
          )}

          <button
            onClick={startGame}
            className="game-start__button"
          >
            Start
          </button>
        </div>
      </div>
    </div>
  )
}

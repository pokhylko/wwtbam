import React, { useState } from 'react';

import { Start } from './components/Start';
import { Game } from './components/Game';

import './App.scss';

export const App = () => {
  const [gameStart, setGameStart] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  return (
    <div className="game">
      { !gameStart ? (
        <Start
          setGameStart={setGameStart}
          gameOver={gameOver}
          score={score}
        />
      ) : (
        <Game
          setGameStart={setGameStart}
          setGameOver={setGameOver}
          setScore={setScore}
        />
      )}
    </div>
  );
};

import { useState } from 'react';

import { Start } from './components/Start';
import { Game } from './components/Game';

import './App.scss';

export const App = () => {
  const [isGameStart, setIsGameStart] = useState<boolean>(false);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  return (
    <div className="game">
      { !isGameStart ? (
        <Start
          isGameOver={isGameOver}
          score={score}
          setIsGameStart={setIsGameStart}
        />
      ) : (
        <Game
          setIsGameStart={setIsGameStart}
          setIsGameOver={setIsGameOver}
          setScore={setScore}
        />
      )}
    </div>
  );
};

import React, { useState } from 'react';
import './App.scss';
import Start from './components/Start/Start';
import Game from './components/Game/Game';

const App = () => {
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

export default App;

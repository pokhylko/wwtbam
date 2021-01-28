import React, { useState } from 'react';

import PropTypes from 'prop-types';

import { MobileMenu } from '../MobileMenu';
import { Question } from '../Question';
import { Steps } from '../Steps';

import './Game.scss';

export const Game = ({ setGameStart, setGameOver, setScore }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [hideSteps, setHideSteps] = useState(true);

  return (
    <div className="game-field">
      <div className="game-field__wrapper">
        <Question
          setCurrentStep={setCurrentStep}
          currentStep={currentStep}
          setGameStart={setGameStart}
          setGameOver={setGameOver}
          setScore={setScore}
        />

        <Steps
          currentStep={currentStep}
          hideSteps={hideSteps}
        />
      </div>

      <MobileMenu setHideSteps={setHideSteps} />
    </div>
  );
};

Game.propTypes = {
  setGameStart: PropTypes.func.isRequired,
  setGameOver: PropTypes.func.isRequired,
  setScore: PropTypes.func.isRequired,
};

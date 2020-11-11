import React, { useState, useEffect } from 'react';
import './Game.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MobileMenu from '../../components/MobileMenu/MobileMenu';
import questions from '../../data/questions.json';

const LETTERS = ['A', 'B', 'C', 'D'];
const STEPS = [500, 1000, 2000, 4000, 8000, 16000, 32000, 64000, 125000, 250000, 500000, 1000000];

const Game = ({ setGameStart, setGameOver, setScore }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(false);
  const [wrongAnswer, setWrongAnswer] = useState(false);
  const [showStep, setShowStep] = useState(false);
  const reverseSteps = [...STEPS].reverse();
  const currentQuestion = questions[currentStep];

  const checkAnswer = (answer) => {
    setSelectedAnswer(answer);

    if (answer !== currentQuestion.correct) {
      setTimeout(() => {
        setWrongAnswer(answer);
      }, 1000);
    }

    if (answer === currentQuestion.correct && currentStep === 10) {
      setTimeout(() => {
        setCorrectAnswer(answer);
      }, 1000);
    }

    if (answer === currentQuestion.correct) {
      setTimeout(() => {
        setCorrectAnswer(answer);
      }, 1000);
    }
  };

  useEffect(() => {
    if (correctAnswer) {
      setTimeout(() => {
        setCurrentStep((state) => state + 1);
        setCorrectAnswer(false);
      }, 2000);
    }
  }, [correctAnswer]);

  const gameScore = (finishStep) => {
    if (finishStep === 0) {
      setScore(0);
    } else {
      setScore(STEPS[finishStep - 1]);
    }
  };

  const gameOver = (finishStep) => {
    gameScore(finishStep);
    setGameStart(false);
    setGameOver(true);
  };

  useEffect(() => {
    if (wrongAnswer) {
      setTimeout(() => {
        gameOver(currentStep);
        setWrongAnswer(false);
      }, 1500);
    }
  }, [wrongAnswer, currentStep, gameOver]);

  return (
    <div className="game-field">
      <div className="game-field__wrapper">
        <div className="game-field__question">
          <h2 className="game-field__title">{currentQuestion.question}</h2>

          <div className="game-field__answers">
            {currentQuestion.answers.map((answer, index) => (
              <button
                className={classNames(
                  'game-field__answer',
                  'answer-button',
                  {
                    'answer-button_selected': answer === selectedAnswer,
                    'answer-button_correct': answer === correctAnswer,
                    'answer-button_wrong': answer === wrongAnswer,
                  },
                )}
                type="button"
                key={answer}
                onClick={() => checkAnswer(answer)}
              >
                <span className="answer-button__letter">{LETTERS[index]}</span>
                {answer}
              </button>
            ))}
          </div>
        </div>

        <div className={classNames(
          'game-field__steps',
          { 'mobile-hidden': !showStep },
        )}
        >
          <div className="game-field__steps-list">
            {reverseSteps.map((step) => (
              <div
                className={classNames(
                  'game-field__step',
                  {
                    'game-field__step_inactive': step > STEPS[currentStep],
                    'game-field__step_current': step === STEPS[currentStep],
                    'game-field__step_finished': step < STEPS[currentStep],
                  },
                )}
                key={step}
              >
                {`$${step.toLocaleString()}`}
              </div>
            ))}
          </div>
        </div>

        <MobileMenu setShowStep={setShowStep} />
      </div>
    </div>
  );
};

Game.propTypes = {
  setGameStart: PropTypes.func.isRequired,
  setGameOver: PropTypes.func.isRequired,
  setScore: PropTypes.func.isRequired,
};

export default Game;

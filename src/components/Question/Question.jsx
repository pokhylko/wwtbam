import React, {
  useState, useEffect, useCallback, useMemo,
} from 'react';

import PropTypes from 'prop-types';
import cn from 'classnames';

import './Question.scss';

import configuration from '../../data/game-configuration.json';

export const Question = ({
  currentStep, setCurrentStep, setGameStart, setGameOver, setScore,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [wrongAnswer, setWrongAnswer] = useState('');
  const currentQuestion = configuration.questions[currentStep];
  const randomizeAnswers = useMemo(() => currentQuestion.answers
    .sort(() => Math.random() - 0.5), [currentQuestion]);

  const checkAnswer = useCallback((answer) => {
    let timerWrong;
    let timerCorrect;
    setSelectedAnswer(answer);

    if (answer !== currentQuestion.correct) {
      timerWrong = setTimeout(() => {
        setWrongAnswer(answer);
      }, 1000);
    }

    if (answer === currentQuestion.correct) {
      timerCorrect = setTimeout(() => {
        setCorrectAnswer(answer);
      }, 1000);
    }

    return () => {
      clearTimeout(timerWrong);
      clearTimeout(timerCorrect);
    };
  }, [currentStep]);

  const gameScore = (finishStep) => {
    if (finishStep === 0) {
      setScore(0);
    } else {
      setScore(configuration.steps[finishStep - 1]);
    }
  };

  const gameOver = (finishStep) => {
    gameScore(finishStep);
    setGameStart(false);
    setGameOver(true);
  };

  useEffect(() => {
    let timer;

    if (correctAnswer) {
      timer = setTimeout(() => {
        if (currentStep === configuration.questions.length - 1) {
          gameOver(currentStep + 1);
        }

        setCurrentStep((state) => state + 1);
        setCorrectAnswer('');
        setSelectedAnswer('');
      }, 1500);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [correctAnswer]);

  useEffect(() => {
    let timer;

    if (wrongAnswer) {
      timer = setTimeout(() => {
        setWrongAnswer('');
        setSelectedAnswer('');
        gameOver(currentStep);
      }, 1500);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [wrongAnswer]);

  return (
    <div className="question">
      <h2 className="question__title">{currentQuestion.question}</h2>

      <div className="question__answers">
        {randomizeAnswers.map((answer, index) => (
          <button
            className={cn(
              'question__button',
              {
                'question__button--selected': answer === selectedAnswer,
                'question__button--correct': answer === correctAnswer,
                'question__button--wrong': answer === wrongAnswer,
              },
            )}
            type="button"
            key={answer}
            onClick={() => checkAnswer(answer)}
          >
            <span className="question__button-letter">
              {configuration.letters[index]}
            </span>
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
};

Question.propTypes = {
  currentQuestion: PropTypes.shape({
    question: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(PropTypes.string).isRequired,
    correct: PropTypes.string.isRequired,
  }).isRequired,
  currentStep: PropTypes.number.isRequired,
  setCurrentStep: PropTypes.func.isRequired,
  setGameStart: PropTypes.func.isRequired,
  setGameOver: PropTypes.func.isRequired,
  setScore: PropTypes.func.isRequired,
};

import {
  useState, useEffect, useCallback, useMemo, FC, Dispatch, SetStateAction,
} from 'react';

import cn from 'classnames';

import './Question.scss';

import configuration from '../../data/game-configuration.json';

type CurrentQuestion = {
  question: string;
  answers: string[];
  correct: string;
};

type Props = {
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
  setIsGameStart: Dispatch<SetStateAction<boolean>>;
  setIsGameOver: Dispatch<SetStateAction<boolean>>;
  setScore: Dispatch<SetStateAction<number>>;
};

export const Question: FC<Props> = ({
  currentStep, setCurrentStep, setIsGameStart, setIsGameOver, setScore,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [correctAnswer, setCorrectAnswer] = useState<string>('');
  const [wrongAnswer, setWrongAnswer] = useState<string>('');
  const [isAnswered, setIsAnswered] = useState<boolean>(false);

  const currentQuestion: CurrentQuestion = configuration.questions[currentStep];
  const randomizeAnswers: string[] = useMemo(() => currentQuestion.answers
    .sort(() => Math.random() - 0.5), [currentQuestion]);

  const checkAnswer = useCallback((answer: string) => {
    let timerWrong: NodeJS.Timeout;
    let timerCorrect: NodeJS.Timeout;

    setSelectedAnswer(answer);
    setIsAnswered(true);

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
  }, [currentQuestion.correct]);

  const gameScore = useCallback((finishStep: number) => {
    if (finishStep === 0) {
      setScore(0);
    } else {
      setScore(configuration.steps[finishStep - 1]);
    }
  }, [setScore]);

  const gameOver = useCallback((finishStep: number) => {
    gameScore(finishStep);
    setIsGameStart(false);
    setIsGameOver(true);
  }, [gameScore, setIsGameOver, setIsGameStart]);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (correctAnswer) {
      timer = setTimeout(() => {
        if (currentStep === configuration.questions.length - 1) {
          gameOver(currentStep + 1);
        }

        setCurrentStep((state) => state + 1);
        setCorrectAnswer('');
        setSelectedAnswer('');
        setIsAnswered(false);
      }, 1500);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [correctAnswer, currentStep, gameOver, setCurrentStep]);

  useEffect(() => {
    let timer: NodeJS.Timeout;

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
  }, [currentStep, gameOver, wrongAnswer]);

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
                'question__button--inactive': isAnswered,
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

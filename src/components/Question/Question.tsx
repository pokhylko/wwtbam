import {
  useState, useEffect, useCallback, FC,
} from 'react';

import cn from 'classnames';

import { useAppDispatch, useAppSelector } from 'src/store/hooks';

import { Answer, QuestionType } from 'src/types';

import { finishedGame, increaseCurrentStep, setScore } from '../Game/GameSlice';

import styles from './Question.module.scss';

export const Question: FC = () => {
  const dispatch = useAppDispatch();
  const { currentStep, questions } = useAppSelector((state) => state.game);

  const [selectedAnswer, setSelectedAnswer] = useState<Answer | null>(null);
  const [isAnswerCorrected, setIsAnswerCorrected] = useState<boolean | null>(null);

  const currentQuestion: QuestionType = questions[currentStep];

  const handleAnswer = (answer: Answer) => {
    setSelectedAnswer(answer);

    setTimeout(() => {
      setIsAnswerCorrected(answer.isCorrected);
    }, 1000);
  };

  const gameScore = useCallback((finishStep: number) => {
    if (finishStep === 0) {
      dispatch(setScore(0));
    } else {
      dispatch(setScore(questions[finishStep - 1].prize));
    }
  }, [dispatch, questions]);

  const gameOver = useCallback((finishStep: number) => {
    gameScore(finishStep);
    dispatch(finishedGame());
  }, [dispatch, gameScore]);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isAnswerCorrected) {
      timer = setTimeout(() => {
        if (currentStep === questions.length - 1) {
          gameOver(currentStep + 1);
        }

        dispatch(increaseCurrentStep());
        setSelectedAnswer(null);
        setIsAnswerCorrected(null);
      }, 1500);
    } else if (isAnswerCorrected === false) {
      timer = setTimeout(() => {
        setIsAnswerCorrected(null);
        gameOver(currentStep);
      }, 1500);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [currentStep, dispatch, gameOver, isAnswerCorrected, questions.length]);

  return (
    <div className={styles.Question}>
      <h2 className={styles.Question_title}>{currentQuestion.question}</h2>

      <div className={styles.Question_answers}>
        {currentQuestion.answers.map((answer) => (
          <button
            className={cn(
              styles.Question_button,
              {
                [styles.Question_button___correct]: selectedAnswer?.option === answer.option
                  && isAnswerCorrected,
                [styles.Question_button___wrong]: selectedAnswer?.option === answer.option
                  && isAnswerCorrected === false,
                [styles.Question_button___selected]: selectedAnswer?.option === answer.option,
                [styles.Question_button___inactive]: selectedAnswer,
              },
            )}
            type="button"
            key={answer.id}
            onClick={() => handleAnswer(answer)}
          >
            <span className={styles.Question_buttonLetter}>
              {answer.id}
            </span>
            {answer.option}
          </button>
        ))}
      </div>
    </div>
  );
};

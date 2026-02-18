import { FC } from 'react';

import cn from 'classnames';

import { useGameFlow } from './useGameFlow';

import styles from './Question.module.scss';

export const Question: FC = () => {
  const {
    currentQuestion, selectedAnswer, isAnswerCorrect, handleAnswer,
  } = useGameFlow();

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
                  && isAnswerCorrect,
                [styles.Question_button___wrong]: selectedAnswer?.option === answer.option
                  && isAnswerCorrect === false,
                [styles.Question_button___selected]: selectedAnswer?.option === answer.option,
                [styles.Question_button___inactive]: selectedAnswer,
              },
            )}
            type="button"
            key={answer.id}
            onClick={() => { handleAnswer(answer); }}
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

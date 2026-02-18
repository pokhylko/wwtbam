import { FC } from 'react';

import cn from 'classnames';

import { useAppSelector } from '@/store/hooks';
import questions from '@/data/game-configuration.json';

import styles from './Prizes.module.scss';

const reversePrizes = questions.map((question) => question.prize).reverse();

interface Props {
  isHideSteps: boolean;
}

export const Prizes: FC<Props> = ({ isHideSteps }) => {
  const { currentStep } = useAppSelector((state) => state.game);

  const currentPrize = questions[currentStep]?.prize ?? 0;

  return (
    <div className={cn(
      styles.Prizes,
      { [styles.Prizes___mobile]: isHideSteps },
    )}
    >
      <div className={styles.Prizes_steps}>
        {reversePrizes.map((prize) => (
          <div
            className={cn(
              styles.Prizes_step,
              {
                [styles.Prizes_step___inactive]: prize > currentPrize,
                [styles.Prizes_step___current]: prize === currentPrize,
                [styles.Prizes_step___finished]: prize < currentPrize,
              },
            )}
            key={prize}
          >
            {`$${prize.toLocaleString()}`}
          </div>
        ))}
      </div>
    </div>
  );
};

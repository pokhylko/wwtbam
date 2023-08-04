import { FC, useMemo } from 'react';

import cn from 'classnames';

import { useAppSelector } from 'src/store/hooks';

import styles from './Prizes.module.scss';

type Props = {
  isHideSteps: boolean;
};

export const Prizes: FC<Props> = ({ isHideSteps }) => {
  const { currentStep, questions } = useAppSelector((state) => state.game);

  const currentPrize = questions[currentStep].prize;

  const reversePrizes = useMemo(
    () => questions.map((question) => question.prize).reverse(),
    [questions],
  );

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

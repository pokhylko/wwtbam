import { FC, useMemo } from 'react';

import cn from 'classnames';

import { useAppSelector } from 'src/store/hooks';

import './Prizes.scss';

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
      'prizes',
      { 'prizes--mobile': isHideSteps },
    )}
    >
      {reversePrizes.map((prize) => (
        <div
          className={cn(
            'prizes__step',
            {
              'prizes__step--inactive': prize > currentPrize,
              'prizes__step--current': prize === currentPrize,
              'prizes__step--finished': prize < currentPrize,
            },
          )}
          key={prize}
        >
          {`$${prize.toLocaleString()}`}
        </div>
      ))}
    </div>
  );
};

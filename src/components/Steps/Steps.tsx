import { FC } from 'react';

import cn from 'classnames';

import './Steps.scss';

import configuration from '../../data/game-configuration.json';

const reverseSteps = [...configuration.steps].reverse();

type Props = {
  currentStep: number;
  isHideSteps: boolean;
};

export const Steps: FC<Props> = ({ currentStep, isHideSteps }) => (
  <div className={cn(
    'game-steps',
    { 'game-steps--mobile': isHideSteps },
  )}
  >
    {reverseSteps.map((step) => (
      <div
        className={cn(
          'game-steps__step',
          {
            'game-steps__step--inactive': step > configuration.steps[currentStep],
            'game-steps__step--current': step === configuration.steps[currentStep],
            'game-steps__step--finished': step < configuration.steps[currentStep],
          },
        )}
        key={step}
      >
        {`$${step.toLocaleString()}`}
      </div>
    ))}
  </div>
);

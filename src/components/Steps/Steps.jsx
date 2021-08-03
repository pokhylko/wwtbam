import React from 'react';

import PropTypes from 'prop-types';
import cn from 'classnames';

import './Steps.scss';

import configuration from '../../data/game-configuration.json';

const reverseSteps = [...configuration.steps].reverse();

export const Steps = ({ currentStep, hideSteps }) => (
  <div className={cn(
    'game-steps',
    { 'game-steps--mobile': hideSteps },
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

Steps.propTypes = {
  currentStep: PropTypes.number.isRequired,
  hideSteps: PropTypes.bool.isRequired,
};

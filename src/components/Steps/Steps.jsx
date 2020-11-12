import React from 'react';
import './Steps.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import configuration from '../../data/game-configuration.json';

const reverseSteps = [...configuration.steps].reverse();

const Steps = ({ currentStep, hideSteps }) => (
  <div className={classNames(
    'game-steps',
    { 'game-steps_mobile': hideSteps },
  )}
  >
    <div className="game-steps__list">
      {reverseSteps.map((step) => (
        <div
          className={classNames(
            'game-steps__step',
            {
              'game-steps__step_inactive': step > configuration.steps[currentStep],
              'game-steps__step_current': step === configuration.steps[currentStep],
              'game-steps__step_finished': step < configuration.steps[currentStep],
            },
          )}
          key={step}
        >
          {`$${step.toLocaleString()}`}
        </div>
      ))}
    </div>
  </div>
);

Steps.propTypes = {
  currentStep: PropTypes.number.isRequired,
  hideSteps: PropTypes.bool.isRequired,
};

export default Steps;

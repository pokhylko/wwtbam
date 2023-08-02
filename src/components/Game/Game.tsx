import {
  Dispatch, FC, SetStateAction, useState,
} from 'react';

import { MobileMenu } from '../MobileMenu';
import { Question } from '../Question';
import { Steps } from '../Steps';

import './Game.scss';

type Props = {
  setIsGameStart: Dispatch<SetStateAction<boolean>>;
  setIsGameOver: Dispatch<SetStateAction<boolean>>;
  setScore: Dispatch<SetStateAction<number>>;
};

export const Game: FC<Props> = ({ setIsGameStart, setIsGameOver, setScore }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isHideSteps, setIsHideSteps] = useState<boolean>(true);

  return (
    <div className="game-field">
      <div className="game-field__wrapper">
        <Question
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          setIsGameStart={setIsGameStart}
          setIsGameOver={setIsGameOver}
          setScore={setScore}
        />

        <Steps
          currentStep={currentStep}
          isHideSteps={isHideSteps}
        />
      </div>

      <MobileMenu setIsHideSteps={setIsHideSteps} />
    </div>
  );
};

import { FC, useState } from 'react';

import { MobileMenu } from '../MobileMenu';
import { Question } from '../Question';
import { Prizes } from '../Prizes';

import './Game.scss';

export const Game: FC = () => {
  const [isHideSteps, setIsHideSteps] = useState<boolean>(true);

  return (
    <div className="game-field">
      <div className="game-field__wrapper">
        <Question />

        <Prizes isHideSteps={isHideSteps} />
      </div>

      <MobileMenu setIsHideSteps={setIsHideSteps} />
    </div>
  );
};

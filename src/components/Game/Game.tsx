import { FC, useState } from 'react';

import { MobileMenu } from '../MobileMenu';
import { Question } from '../Question';
import { Prizes } from '../Prizes';

import styles from './Game.module.scss';

export const Game: FC = () => {
  const [isHideSteps, setIsHideSteps] = useState<boolean>(true);

  return (
    <div className={styles.Game}>
      <div className={styles.Game_wrapper}>
        <Question />

        <Prizes isHideSteps={isHideSteps} />
      </div>

      <MobileMenu setIsHideSteps={setIsHideSteps} />
    </div>
  );
};

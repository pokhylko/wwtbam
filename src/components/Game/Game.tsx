import { FC, useState } from 'react';

import { MobileMenu } from '@/components/MobileMenu';
import { Question } from '@/components/Question';
import { Prizes } from '@/components/Prizes';

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

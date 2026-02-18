import {
  Dispatch, FC, SetStateAction, useState,
} from 'react';

import styles from './MobileMenu.module.scss';

import OpenMenu from '@/images/open-menu.svg?react';
import CloseMenu from '@/images/close-menu.svg?react';

interface Props {
  setIsHideSteps: Dispatch<SetStateAction<boolean>>;
}

export const MobileMenu: FC<Props> = ({ setIsHideSteps }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen((state) => !state);
    setIsHideSteps((state) => !state);
  };

  return (
    <div className={styles.MobileMenu}>
      <button
        className={styles.MobileMenu_button}
        type="button"
        onClick={handleClick}
      >
        {!isOpen ? <OpenMenu /> : <CloseMenu />}
      </button>
    </div>
  );
};

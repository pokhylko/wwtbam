import React, { useState } from 'react';
import './MobileMenu.scss';
import PropTypes from 'prop-types';
import openMenu from '../../images/open-menu.svg';
import closeMenu from '../../images/close-menu.svg';

const MobileMenu = ({ setHideSteps }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((state) => !state);
    setHideSteps((state) => !state);
  };

  return (
    <div className="mobile-menu">
      <button
        className="mobile-menu__button"
        type="button"
        onClick={handleClick}
      >
        <img
          className="mobile-menu__icon"
          src={!isOpen ? openMenu : closeMenu}
          alt="menu-icon"
        />
      </button>
    </div>
  );
};

MobileMenu.propTypes = {
  setHideSteps: PropTypes.func.isRequired,
};

export default MobileMenu;

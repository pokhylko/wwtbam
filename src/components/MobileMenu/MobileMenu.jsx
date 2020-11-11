import React, { useState } from 'react';
import './MobileMenu.scss';
import PropTypes from 'prop-types';
import openMenu from '../../images/open-menu.svg';
import closeMenu from '../../images/close-menu.svg';

const MobileMenu = ({ setShowStep }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((state) => !state);
    setShowStep((state) => !state);
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
  setShowStep: PropTypes.func.isRequired,
};

export default MobileMenu;

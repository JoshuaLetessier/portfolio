import React from 'react';
import NavMenu from './NavMenu';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__content">
        <h1 className="header__logo">Letessier Joshua alias Faolline</h1>
        <NavMenu />
      </div>
    </header>
  );
};

export default Header;

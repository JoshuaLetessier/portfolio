import React from 'react';

const NavMenu: React.FC = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item"><a href="/" className="nav__link">Accueil</a></li>
        <li className="nav__item"><a href="/projects" className="nav__link">Projets</a></li>
        <li className="nav__item"><a href="/about" className="nav__link">À propos</a></li>
        <li className="nav__item"><a href="/contact" className="nav__link">Contact</a></li>
      </ul>
    </nav>
  );
};

export default NavMenu;

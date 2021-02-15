import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import HumburgerMenu from '../HumburgerMenu/HumburgerMenu';
import { Route, Link } from 'react-router-dom';

export default function Header({name, onAuthClick, onClose}) {
  return (
    <header className="header">
      <div className="header__container">
        <Route exact path="/">
          <Link className={`header__title header__title_${name}`}>NewsExplorer</Link>
        </Route>
        <Navigation
          onAuthClick={onAuthClick}
        />
        <HumburgerMenu />
      </div>
    </header>
  );
};

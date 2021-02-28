import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import HumburgerMenu from '../HumburgerMenu/HumburgerMenu';
import { Route, Link } from 'react-router-dom';

export default function Header({name, onAuthClick, userData, loggedIn, handleLogout}) {
  return (
    <header className="header">
      <div className="header__container">
        <Route exact path="/">
          <Link to="/" className={`header__title header__title_${name}`}>NewsExplorer</Link>
        </Route>
        <Navigation
          onAuthClick={onAuthClick}
          userData={userData}
          loggedIn={loggedIn}
          handleLogout={handleLogout}
        />
        <HumburgerMenu />
      </div>
    </header>
  );
};

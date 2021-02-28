import React from 'react';
import '../Header/Header.css';
import Navigation from '../Navigation/Navigation';
import './SavedNewsHeader.css';
import { Link } from 'react-router-dom';
import HumburgerMenu from '../HumburgerMenu/HumburgerMenu';

export default function SavedNewsHeader({ userData, loggedIn, handleLogout }) {
  return (
    <header className="header header_saved-news">
      <div className="header__container header__container_saved-news">
        <Link to="/" className="header__title header__title_saved-news">NewsExplorer</Link>
        <HumburgerMenu />
        <Navigation
          name='saved-news'
          userData={userData}
          loggedIn={loggedIn}
          handleLogout={handleLogout}
        />
      </div>
    </header>
  );
};


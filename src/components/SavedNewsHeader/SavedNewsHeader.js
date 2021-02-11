import React from 'react';
import '../Header/Header.css';
import Navigation from '../Navigation/Navigation';
import './SavedNewsHeader.css';
import { Link } from 'react-router-dom';
// import Header from '../Header/Header';

export default function SavedNewsHeader() {
  return (
    <header className="header header_saved-news">
      <div className="header__container header__container_saved-news">
        <Link to="/" className="header__title header__title_saved-news">NewsExplorer</Link>
        <Navigation
          name='saved-news'
        />
      </div>
    </header>
  );
};


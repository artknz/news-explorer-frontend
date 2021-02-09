import React from 'react';
import '../Header/Header.css';
import Navigation from '../Navigation/Navigation';
import './SavedNewsHeader.css';

export default function SavedNewsHeader() {
  return (
    <header className="header header_saved-news">
      <div className="header__container header__container_saved-news">
        <h1 className="header__title header__title_saved-news">NewsExplorer</h1>
        <Navigation
          name='saved-news'
        />
      </div>
    </header>
  );
};


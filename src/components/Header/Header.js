import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';
// import { Route, Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__title">NewsExplorer</h1>
        <Navigation />
      </div>
    </header>
  );
};

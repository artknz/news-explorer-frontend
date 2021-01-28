import React from 'react';
import './Navigation.css';
import { Route, Link } from 'react-router-dom';

export default function Navigation() {
  return(
    <div className="navigation">
      <Route path="/" exact>
        <Link to="/" className="navigation__main">Главная</Link>
      </Route>
      <Route path="/" exact>
        <Link to="/saved-news" className="navigation__saved-news">Сохранённые статьи</Link>
      </Route>
      <button className="navigation__login">Авторизоваться</button>
    </div>
  );
};

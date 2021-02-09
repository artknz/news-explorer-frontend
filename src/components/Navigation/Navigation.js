import React from 'react';
import './Navigation.css';
import { Route, Link } from 'react-router-dom';

export default function Navigation({name}) {
  return(
    <div className="navigation">
      <Route path="/">
        <Link to="/" className={`navigation__main navigation__main_${name}`}>Главная</Link>
      </Route>
      <Route path="/">
        <Link to="/saved-news" className={`navigation__saved-news navigation__saved-news_${name}`}>Сохранённые статьи</Link>
      </Route>
      <button className={`navigation__login navigation__login_${name}`}>Авторизоваться</button>
    </div>
  );
};

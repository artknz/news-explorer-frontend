import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';

export default function Navigation({name, onAuthClick}) {
  return(
    <div className="navigation">
      <NavLink exact to="/" activeClassName="navigation__active" className={`navigation__main navigation__main_${name}`}>Главная</NavLink>
      <NavLink to="/saved-news" activeClassName="navigation__active-black" className={`navigation__saved-news navigation__saved-news_${name}`}>Сохранённые статьи</NavLink>
      <button onClick={onAuthClick} className={`navigation__login navigation__login_${name}`}>Авторизоваться</button>
    </div>
  );
};

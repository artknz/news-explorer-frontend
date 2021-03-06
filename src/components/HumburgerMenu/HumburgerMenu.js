import React from 'react';
import { NavLink } from 'react-router-dom';
import './HumburgerMenu.css';

export default function HumburgerMenu({ name }) {
  return(
    <div className="hamburger-menu">
      <input id="menu__toggle" type="checkbox" />
      <label className={`menu__btn menu__btn_${name}`} htmlFor="menu__toggle">
        <span></span>
      </label>
      <nav className="menu__box">
        <div className={'hamburger-menu__title'}>NewsExplorer</div>
        <NavLink exact to="/" className={`navigation__main navigation__main_${"name"}`}>Главная</NavLink>
        <NavLink to="/saved-news" activeClassName="navigation__active-black" className={`navigation__saved-news navigation__saved-news_${"name"}`}>Сохранённые статьи</NavLink>
        <button className={`navigation__login navigation__login_${"name"}`}>Авторизоваться</button>
      </nav>
    </div>
  );
};

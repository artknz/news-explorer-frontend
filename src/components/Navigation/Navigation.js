import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';

export default function Navigation({name, onAuthClick, userData, loggedIn, handleLogout}) {
  const handleNavigation = (loggedIn) => {
    console.log(loggedIn)
    if (loggedIn === true) {
      return <NavLink to="/saved-news" activeClassName="navigation__active-black" className={`navigation__saved-news navigation__saved-news_${name}`}>Сохранённые статьи</NavLink>
    } else if (loggedIn === true) {
      <button onClick={handleLogout} className={`navigation__login navigation__logout_${name}`}>{userData.name}</button>
    }
    return <button onClick={onAuthClick} className={`navigation__login navigation__login_${name}`}>Авторизоваться</button>
  }

  return(
    <div className="navigation">
      <NavLink exact to="/" activeClassName="navigation__active" className={`navigation__main navigation__main_${name}`}>Главная</NavLink>
      {handleNavigation(loggedIn)}

    </div>
  );
};

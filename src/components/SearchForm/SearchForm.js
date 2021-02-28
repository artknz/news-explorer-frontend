import React, { useRef } from 'react';
import './SearchForm.css';
import Header from '../Header/Header';

export default function SearchForm({ onAuthClick, searchArticles, userData, loggedIn }) {
  const input = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    searchArticles(input.current.value);
  }

  return (
    <div className="search-form">
      <Header
        onAuthClick={onAuthClick}
        userData={userData}
        loggedIn={loggedIn}
      />
      <div className="search-form__container">
        <h1 className="search-form__title">Что творится в мире?</h1>
        <p className="serach-form__caption">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
        <form className="search-form__bar" onSubmit={handleSubmit} noValidate>
          <input ref={input} type="text" placeholder="Введите тему новости" className="search-form__type-line" required />
          <button type="submit" className="search-form__submit-button">Искать</button>
        </form>
      </div>
    </div>
  );
};

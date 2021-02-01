import React from 'react';
import Header from '../Header/Header'
import './SearchForm.css';

export default function SearchForm() {
  return (
    <div className="search-form">
      <Header />
      <div className="search-form__container">
        <h1 className="search-form__title">Что творится в мире?</h1>
        <p className="serach-form__caption">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
        <form className="search-form__bar">
          <input type="search" placeholder="Введите тему новости" className="search-form__type-line"></input>
          <button type="submit" className="search-form__submit-button">Искать</button>
        </form>
      </div>
    </div>
  );
};

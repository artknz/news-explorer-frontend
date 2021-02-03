import React from 'react';
import NewsCard from "../NewsCard/NewsCard";
//Раскомментировать для проверки прелоадера
// import Preloader from "../Preloader/Preloader";
import './NewsCardList.css';

export default function NewsCardList() {
  return (
    <div className="news-list">
      <p className="news-list__title">Результаты поиска</p>
      <div className="news-list__cards">
        <NewsCard />
      </div>
      <button type="submit" className="news-list__submit-button">Показать еще</button>
      {/* <Preloader /> */}
    </div>
  );
};

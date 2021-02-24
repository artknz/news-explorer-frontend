import React from 'react';
import NewsCard from "../NewsCard/NewsCard";
//Раскомментировать для проверки прелоадера
// import Preloader from "../Preloader/Preloader";
import './NewsCardList.css';

export default function NewsCardList({ cards }) {
  const [count, setCount ] = React.useState(3);

  function handleMoreButton() {
    setCount(count + 3)
  }

  return (
    <div className="news-list">
      <p className="news-list__title">Результаты поиска</p>
      <section className="news-list__cards">{cards.slice(0, count).map(article => <NewsCard key={article.source.id}  channelName={article.source.name} title={article.title} text={article.description} urlToImage={article.urlToImage} date={article.publishedAt} />)}</section>
      <button type="button" onClick={handleMoreButton} className="news-list__submit-button">Показать еще</button>
      {/* <Preloader /> */}
    </div>
  );
};

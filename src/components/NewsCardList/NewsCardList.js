import React from 'react';
import NewsCard from "../NewsCard/NewsCard";
import './NewsCardList.css';
import mainApi from '../../utils/MainApi';

export default function NewsCardList({ cards, saveCard }) {
  const [count, setCount ] = React.useState(3);

  function handleMoreButton() {
    setCount(count + 3)
  }

  return (
    <div className="news-list">
      <p className="news-list__title">Результаты поиска</p>
      <section className="news-list__cards">{cards.slice(0, count).map(article => <NewsCard onSave={saveCard} key={article.url} channelName={article.source.name} title={article.title} text={article.description} urlToImage={article.urlToImage} date={article.publishedAt} />)}</section>
      <button type="button" onClick={handleMoreButton} className="news-list__submit-button">Показать еще</button>
    </div>
  );
};

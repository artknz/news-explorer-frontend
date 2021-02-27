import React from 'react';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import Footer from '../Footer/Footer';
import './SavedNews.css';
import NewsCard from "../NewsCard/NewsCard";

export default function SavedNews({ articles }) {
  console.log(articles)
  return (
    <div>
      <SavedNewsHeader />
        <div className="saved-news__text">
          <h3 className="saved-news__title">Сохранённые статьи</h3>
          <h2 className="saved-news__message">Грета, у вас 5 сохранённых статей</h2>
          <p className="saved-news__key-words">По ключевым словам: Природа, Тайга и 2-м другим</p>
        </div>
        {articles !== null && <section className="saved-articles">{articles.map(article => <NewsCard key={article._id}  channelName={article.source} title={article.title} text={article.text} urlToImage={article.image} date={article.date} />)}</section>}
      <Footer />
    </div>
  );
};

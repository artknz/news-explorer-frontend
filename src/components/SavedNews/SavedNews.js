import React from 'react';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import Footer from '../Footer/Footer';
import './SavedNews.css';
import NewsCard from "../NewsCard/NewsCard";

export default function SavedNews({ articles, userData, loggedIn, handleLogout, deleteCard }) {
  return (
    <div>
      <SavedNewsHeader
        userData={userData}
        loggedIn={loggedIn}
        handleLogout={handleLogout}
      />
        <div className="saved-news__text">
          <h3 className="saved-news__title">Сохранённые статьи</h3>
          <h2 className="saved-news__message">{`${userData.name}, у вас ${articles.length} сохраненных новостей`}</h2>
          <p className="saved-news__key-words">По ключевым словам: Природа, Тайга и 2-м другим</p>
        </div>
        <div className="saved-news__section">
          {articles !== null && <section className="saved-articles">{articles.map(article => <NewsCard key={article._id} onDelete={_ => deleteCard(article._id)} channelName={article.source} title={article.title} text={article.text} urlToImage={article.image} date={article.date} />)}</section>}
        </div>
      <Footer />
    </div>
  );
};

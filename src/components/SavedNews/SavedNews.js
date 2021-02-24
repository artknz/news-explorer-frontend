import React from 'react';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
// import NewsCardList from '../NewsCardList/NewsCardList';
import Footer from '../Footer/Footer';
import './SavedNews.css';

export default function SavedNews() {
  return (
    <div>
      <SavedNewsHeader />
        <div className="saved-news__text">
          <h3 className="saved-news__title">Сохранённые статьи</h3>
          <h2 className="saved-news__message">Грета, у вас 5 сохранённых статей</h2>
          <p className="saved-news__key-words">По ключевым словам: Природа, Тайга и 2-м другим</p>
        </div>
      <Footer />
    </div>
  );
};

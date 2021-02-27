import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import './Main.css';

export default function Main({ cards, saveCard }) {
  return (
    <div className="main">
      <NewsCardList
        cards={cards}
        saveCard={saveCard}
      />
    </div>
  );
};

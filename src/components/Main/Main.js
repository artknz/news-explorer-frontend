import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import './Main.css';

export default function Main({ cards, saveCard, deleteCard }) {
  return (
    <div className="main">
      <NewsCardList
        cards={cards}
        saveCard={saveCard}
        deleteCard={deleteCard}
      />
    </div>
  );
};
